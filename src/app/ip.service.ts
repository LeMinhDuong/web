import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

const url = 'http://localhost:3000';
const httpOptions = {
  headers: new HttpHeaders({
	'Content-Type':  'application/json'
  })
  
};
 
@Injectable()


export class IpService {
	
	constructor(private http: HttpClient) {}
	
	private extractData(res: Response) {
	  let body = res;
	  return body || { };
	}
	
	getIp(): Observable<any> {
		return this.http.get(url).pipe(
			map(this.extractData));
	}
}