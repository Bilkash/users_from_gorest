import { UserForEditRespondType, UsersRespondType } from "./usersTypes";
import { AxiosError } from "axios";

export type StateType = {
  users: UsersRespondType | null,
  error: AxiosError | null;
  userForEdit: UserForEditRespondType | null;
  userForEditError: AxiosError | null;
  page: number;
  gender: string | null
}
