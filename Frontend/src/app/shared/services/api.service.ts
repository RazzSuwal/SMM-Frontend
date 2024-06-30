import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = "https://localhost:7091/api/Users/register"
  constructor(private http: HttpClient) { }

  register(user: any){
    return this.http.post(this.baseUrl, user, {
      responseType: 'text',
    });
  }
}
