import { IRefreshTime, IResponse } from '../types';
import { DataFetchService } from './DataFetchService';

class TokenService {
  dataFetchService: DataFetchService;

  constructor() {
    this.dataFetchService = new DataFetchService();
  }

  public async getRefreshedToken(token: string): Promise<string | null> {
    try {
      const res = await this.dataFetchService.refreshToken(token);
      const data: IResponse = await res.json();
      return data.token;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  public async isTokenValid(token: string): Promise<boolean> {
    try {
      const res = await this.dataFetchService.checkTokenTime(token);
      const data: IRefreshTime = await res.json();
      return data.timeRemaining <= 0 ? false : true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

export { TokenService };
