import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://codingexercise.speakcore.com/'; 

  constructor(private http: HttpClient) {}

  
  storeUserData(userData: any): Observable<any> {
    // Send the data to the API using POST
    return this.http.post(`${this.apiUrl}/registrations`, userData); 
  }
}
