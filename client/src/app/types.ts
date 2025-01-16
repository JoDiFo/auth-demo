export interface IUser {
  name: string;
  password: string;
}

export interface IUserData {
  username: string;
  passwordHash: string;
}

export interface IResponse {
  token: string;
}

export interface IRefreshTime {
  timeRemaining: number;
}

export type TFormMode = 'signin' | 'signup';
