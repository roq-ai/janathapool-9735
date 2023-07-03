import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { carPoolValidationSchema } from 'validationSchema/car-pools';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getCarPools();
    case 'POST':
      return createCarPool();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getCarPools() {
    const data = await prisma.car_pool
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'car_pool'));
    return res.status(200).json(data);
  }

  async function createCarPool() {
    await carPoolValidationSchema.validate(req.body);
    const body = { ...req.body };

    const data = await prisma.car_pool.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
