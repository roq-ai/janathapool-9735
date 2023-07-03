const mapping: Record<string, string> = {
  'car-pools': 'car_pool',
  companies: 'company',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
