import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthToken, Client} from "./Users"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = 'http://localhost:8000'

  constructor(private http : HttpClient) { }

  login(username: string, password:string): Observable<AuthToken>{
    return this.http.post<AuthToken>(`${this.BASE_URL}/api/login/`,
    {username,password}
    )
  }

}
