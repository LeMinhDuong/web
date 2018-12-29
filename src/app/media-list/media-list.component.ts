import { Component, OnInit } from '@angular/core';
import {MediaService} from './../media.service';
import { environment } from './../../environments/environment';
@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css'],
  providers: [
	MediaService
  ]
})
export class MediaListComponent implements OnInit {
	
	media;
	search;
	constructor(private mediaService:MediaService) { }

	ngOnInit() {
		this.search = sessionStorage.getItem('search');
		if(this.search) {
			this.mediaService.getMediaBySearch(this.search, environment.num_results_per_page)
				.subscribe((data: {}) => {
					this.media = data;
				});
		} else {
			this.mediaService.getMedia(environment.num_results_per_page).subscribe((data: {}) => {
				this.media = data;
				//console.log(this.media);	
			});
		}
		
  }

}
