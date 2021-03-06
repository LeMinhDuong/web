import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from './../environments/environment';
const url = environment.api_url +'/get-settings';
const httpOptions = {
  headers: new HttpHeaders({
	'Content-Type':  'application/json',
	"Authorization": "5p53iN9yd3"
  })
};
 
@Injectable()

export class SettingsService {

	constructor(private http: HttpClient) { }
	private extractData(res: Response) {
	  let body = res;
	  return body || { };
	}
	getSettings(): Observable<any> {
		return this.http.get(url, httpOptions).pipe(
			map(this.extractData));
	}
}
