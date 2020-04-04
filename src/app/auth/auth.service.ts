import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private httpClient: HttpClient) {}
  // Provide token for authentication, and once authentication is successful, store JWT token in session

  private saveToken(token: string): void {
    const tokenStr = 'Bearer ' + token;
    sessionStorage.setItem('token', tokenStr);
  }

  login(token: TokenPayload) {
    return this.httpClient
      .post<TokenResponse>('/api/auth', token)
      .pipe(
        map((data: TokenResponse) => {
          if (data.token) {
            this.saveToken(data.token);
          }
          return data;
        })
      );
  }

  isLoggedIn() {
    const token = sessionStorage.getItem('token');
    return !(token === null);
  }

  logout() {
    sessionStorage.removeItem('token');
  }

  requestToken(email) {
    return this.httpClient.post<TokenResponse>('/api/admin/signin', {email: email});
  }
}

export interface TokenPayload {
  token: string;
}

interface TokenResponse {
  token: string;
}
