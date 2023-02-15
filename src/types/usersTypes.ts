import { AxiosHeaders } from "axios";

export interface UsersRespondType {
  config: any;
  data: UserType[];
  headers: AxiosHeaders;
  status: number;
  statusText: string;
  request: any;
}

export interface UserForEditRespondType {
  config: any;
  data: UserType;
  headers: AxiosHeaders;
  status: number;
  statusText: string;
  request: any;
}

export interface UserType {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

export interface UserEditType {
  name: string;
  email: string;
  gender: string;
  status: string;
}
