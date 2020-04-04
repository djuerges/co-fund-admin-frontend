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
  // Provide username and password for authentication, and once authentication is successful, 
  //store JWT token in session

  private saveToken(token: string): void {
    let tokenStr = "Bearer " + token;
    sessionStorage.setItem("token", tokenStr);
  }

  login(user : TokenPayload) {
    return this.httpClient
      .post<TokenResponse>("/api/auth", user)
      .pipe(
        map((data : TokenResponse) => {
          if (data.token) {
            this.saveToken(data.token);
          }
          return data;
        })
      );
  }

  isLoggedIn() {
    let token = sessionStorage.getItem("token");
    return !(token === null);
  }

  logout() {
    sessionStorage.removeItem("token");
  }
}

export interface TokenPayload {
  username: string;
  password: string;
}

interface TokenResponse {
  token: string;
}