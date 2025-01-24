import { IRefreshTime, IResponse } from '../types';
import { DataFetchService } from './DataFetchService';

class TokenService {
  dataFetchService: DataFetchService;

  constructor() {
    this.dataFetchService = new DataFetchService();
  }

  public async getRefreshedToken(
    token: string | null
  ): Promise<IResponse | null> {
    if (!token) return null;

    try {
      const res = await this.dataFetchService.refreshToken(token);
      return await res.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  public async isTokenValid(token: string | null): Promise<boolean> {
    if (!token) return false;

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
