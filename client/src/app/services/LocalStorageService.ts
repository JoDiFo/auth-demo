class LocalStorageService {
  private localStorageKey = 'token';

  getToken() {
    return localStorage.getItem(this.localStorageKey);
  }

  setToken(token: string | null) {
    localStorage.setItem(this.localStorageKey, token ? token : '');
  }

  deleteToken() {
    localStorage.removeItem(this.localStorageKey);
  }
}

export { LocalStorageService };
