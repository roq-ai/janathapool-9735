import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CarPoolInterface {
  id?: string;
  company_id?: string;
  employee_id?: string;
  passenger_id?: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  user_car_pool_employee_idTouser?: UserInterface;
  user_car_pool_passenger_idTouser?: UserInterface;
  _count?: {};
}

export interface CarPoolGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
  employee_id?: string;
  passenger_id?: string;
}
