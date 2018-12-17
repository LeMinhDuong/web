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
	constructor(private mediaService:MediaService) { }

	ngOnInit() {
		//lam tam thoi
		this.mediaService.getMedia(environment.num_results_per_page).subscribe((data: {}) => {
			this.media = data;
		});
	}

}
