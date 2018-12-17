import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from './../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
	constructor(private http: HttpClient) { }
	private extractData(res: Response) {
	  let body = res;
	  return body || { };
	}	
	getCatergories(): Observable<any> {
		let url = environment.api_url +'/get-categories';
		let httpHeaders = new HttpHeaders()
		.set('Content-Type', 'application/json')
		.set("Authorization", "5p53iN9yd3");
		let options = {
			 headers: httpHeaders
		};
		return this.http.get(url, options).pipe(
			map(this.extractData));	
		
	} 
}
