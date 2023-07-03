import axios from 'axios';
import queryString from 'query-string';
import { CarPoolInterface, CarPoolGetQueryInterface } from 'interfaces/car-pool';
import { GetQueryInterface } from '../../interfaces';

export const getCarPools = async (query?: CarPoolGetQueryInterface) => {
  const response = await axios.get(`/api/car-pools${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createCarPool = async (carPool: CarPoolInterface) => {
  const response = await axios.post('/api/car-pools', carPool);
  return response.data;
};

export const updateCarPoolById = async (id: string, carPool: CarPoolInterface) => {
  const response = await axios.put(`/api/car-pools/${id}`, carPool);
  return response.data;
};

export const getCarPoolById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/car-pools/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCarPoolById = async (id: string) => {
  const response = await axios.delete(`/api/car-pools/${id}`);
  return response.data;
};
