import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../model/user.model";
import { Observable } from "rxjs/index";
import { ApiResponse } from "../model/api.response";
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  login(loginPayload): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(environment.API + 'token/generate-token', loginPayload);
  }

  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(environment.API + "users/");
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(environment.API + "users/" + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(environment.API + "users/", user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(environment.API + "users/" + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(environment.API + "users/" + id);
  }
}
