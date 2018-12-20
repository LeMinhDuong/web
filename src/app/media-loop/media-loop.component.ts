import { Component, OnInit } from '@angular/core';
import {MediaService} from './../media.service';
import { environment } from './../../environments/environment';
@Component({
  selector: 'app-media-loop',
  templateUrl: './media-loop.component.html',
  styleUrls: ['./media-loop.component.css'],
  providers : [
	MediaService
  ]
})
export class MediaLoopComponent implements OnInit {
	
	media;
	media_view;
	column;
	constructor(private mediaService:MediaService) { }

	ngOnInit() {
		this.mediaService.getMedia(environment.num_results_per_page).subscribe((data: {}) => {
			this.media = data;
		});
		if( sessionStorage.getItem('media_view') == 'grid_large' 
			|| sessionStorage.getItem('media_view') == 'grid' ) {
			if(sessionStorage.getItem('media_view') == 'grid') {
				sessionStorage.setItem('column', 'col-sm-4');
			} else {
				sessionStorage.setItem('column', 'col-sm-6');
			}
		}
		this.media_view = sessionStorage.getItem('media_view');
		this.column = sessionStorage.getItem('column');
	}

}
