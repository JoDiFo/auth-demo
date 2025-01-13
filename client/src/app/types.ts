export interface IUser {
  id: number;
  name: string;
  password: string;
  description: string;
}

export interface IResponse {
  access: string;
  refresh: string;
}

export type TFormMode = 'signin' | 'signup';
