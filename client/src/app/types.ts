export interface IUser {
  name: string;
  password: string;
}

export interface IResponse {
  access: string;
}

export type TFormMode = 'signin' | 'signup';
