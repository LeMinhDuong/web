import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()

export class PointsService {

	constructor(private http: HttpClient) { }
	private extractData(res: Response) {
	  let body = res;
	  return body || { };
	}
	getPointByUserId(userId): Observable<any> {
		
		let auth_token = localStorage.getItem('auth_token');
		
		let url = 'http://localhost:3000/get-point-by-userid';
		let httpHeaders = new HttpHeaders()
		.set('Content-Type', 'application/json')
		.set("Authorization", "5p53iN9yd3");
		
		//console.log(userId);
		let httpParams = new HttpParams()
		.set('userId', userId)
		.set('auth_token', auth_token);
		
		let options = {
			 headers: httpHeaders,
			 params: httpParams
		}; 
		return this.http.get(url, options).pipe(
			map(this.extractData));
	}
}
