import { IJwtToken } from "./dto";

export type Nullable<T> = { [K in keyof T]: T[K] | null };

export type AuthState = {
  user: string | null;
  token: Nullable<IJwtToken> | null;
};

export type LoginCredentialsDTO = {
  username: string;
  password: string;
};