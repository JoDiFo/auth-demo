export interface IUser {
  id: number;
  name: string;
  password: string;
  description: string;
}

export interface IResponse {
  token: string
}

export type TFormMode = "signin" | "signup"