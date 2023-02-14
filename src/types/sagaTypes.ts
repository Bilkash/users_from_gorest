import { UsersRespondType } from "./usersTypes";

export type StateType = {
  users: UsersRespondType | null,
  error: string | null;
}
