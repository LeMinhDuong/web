import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from './../environments/environment';
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
	getMediaBySearch(search, num_results_per_page): Observable<any> {
		
		let url = environment.api_url +'/get-media-by-search';
		
		let httpHeaders = new HttpHeaders()
		.set('Content-Type', 'application/json')
		.set("Authorization", "5p53iN9yd3");
		
		let httpParams = new HttpParams()
		.set('search', search)
		.set('num_results_per_page', num_results_per_page);
		
		let options = {
			 headers: httpHeaders,
			 params: httpParams
		}; 
		
		return this.http.get(url, options).pipe(
			map(this.extractData));
	}
	
	getMedia(num_results_per_page): Observable<any> {
		let url = environment.api_url +'/get-media';
		
		let httpHeaders = new HttpHeaders()
		.set('Content-Type', 'application/json')
		.set("Authorization", "5p53iN9yd3");
		
		let httpParams = new HttpParams()
		.set('num_results_per_page', num_results_per_page);
		
		let options = {
			 headers: httpHeaders,
			 params: httpParams
		}; 
		
		return this.http.get(url, options).pipe(
			map(this.extractData));
	}
}
