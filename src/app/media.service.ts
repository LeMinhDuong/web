import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

const url = 'http://localhost:3000/get-media';
const httpOptions = {
  headers: new HttpHeaders({
	'Content-Type':  'application/json',
	"Authorization": "5p53iN9yd3"
  })
};
@Injectable()

export class MediaService {

	constructor(private http: HttpClient) { }
	private extractData(res: Response) {
	  let body = res;
	  return body || { };
	}
	getMedia(): Observable<any> {
		let httpHeaders = new HttpHeaders()
		.set('Content-Type', 'application/json')
		.set('Cache-Control', 'no-cache')
		.set("Authorization", "5p53iN9yd3");
		
		let httpParams = new HttpParams()
		.set('id', '1');
		
		let options = {
			 headers: httpHeaders,
			 params: httpParams
		}; 
		
		
		return this.http.get(url, options).pipe(
			map(this.extractData));
	}
}
