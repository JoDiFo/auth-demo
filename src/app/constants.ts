export const SERVER_URL = 'http://192.168.5.32:5000';

export enum ESeverEndpoints {
  LOGIN = '/api/Auth/SignIn',
  REGISTER = '/api/Registration/SignUp',
  LOGOUT = '/api/Auth/SignOut',
  CHECK_TOKEN_TIME = '/api/Token/CheckTokenTime',
  REFRESH_TOKEN_TIME = '/api/Token/RefreshTokenTime',
  GET_USER_DATA = '/api/Token/GetUserData',
}
