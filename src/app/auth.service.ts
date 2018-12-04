import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
	'Content-Type':  'application/json',
	"Authorization": "5p53iN9yd3"
  })
};
 

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
	private http: HttpClient,
	private router: Router) { }
	
	login(email: string, password: string) {
		let url = 'http://localhost:3000/';
		localStorage.setItem('auth_token', 'token');
	}
	
	logout() {
		localStorage.removeItem('auth_token');
	}
 
	public get logIn(): boolean {
		return (localStorage.getItem('auth_token') !== null);
	}
}
