import { IGetData, ICreateData, IDeleteData, IUpdateData } from './Endpoint';

export interface IUser {
  id?: number | undefined;
  key?: string | undefined;
  name?: string | undefined;
  email?: string | undefined;
  gender?: string | undefined;
  address?: IAddress;
  phone?: string | undefined;
}

export interface IUserStore {
  users: IUser[];
  getUsers: () => Promise<IGetData>;
  createUser: (user: IUser) => Promise<ICreateData>;
  updateUser: (id: number | undefined, user: IUser) => Promise<IUpdateData>;
  deleteUser: (id: number | undefined) => Promise<IDeleteData>;
}

interface IAddress {
  street: string | undefined;
  city: string | undefined;
}