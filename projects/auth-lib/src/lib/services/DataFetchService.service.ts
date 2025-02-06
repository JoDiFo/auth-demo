import { Injectable } from '@angular/core';
import { ESeverEndpoints, SERVER_URL } from '../constants';
import { IUser } from '../types';

@Injectable({
  providedIn: 'root',
})
class DataFetchService {
  async register(user: IUser) {
    return fetch(`${SERVER_URL}${ESeverEndpoints.REGISTER}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    });
  }

  async login(user: IUser) {
    return fetch(`${SERVER_URL}${ESeverEndpoints.LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    });
  }

  async getUserData(token: string) {
    return fetch(
      `${SERVER_URL}${ESeverEndpoints.GET_USER_DATA}?token=${token}`
    );
  }

  async logout() {
    return fetch(`${SERVER_URL}${ESeverEndpoints.LOGOUT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  }

  async checkTokenTime(token: string) {
    return fetch(
      `${SERVER_URL}${ESeverEndpoints.CHECK_TOKEN_TIME}?token=${token}`
    );
  }

  async refreshToken(token: string) {
    return fetch(
      `${SERVER_URL}${ESeverEndpoints.REFRESH_TOKEN_TIME}?token=${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    );
  }
}

export { DataFetchService };
