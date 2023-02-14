import { AxiosHeaders } from "axios";

export interface UsersRespondType {
  config: any;
  data: User[];
  headers: AxiosHeaders;
  status: number;
  statusText: string;
  request: any;
}

export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}
