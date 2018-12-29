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
		if(this.search)
		{
			this.mediaService.getMediaBySearch(this.search, environment.num_results_per_page)
				.subscribe((data: {}) => {
					this.media = data;
					if(this.media.title) {
						this.setTitle(this.media.title);
					}
					if(this.media.title && this.media.pic_url) {
						this.meta.updateTag({ name:'og:title',content: this.media.title});
						this.meta.updateTag({ name:'og:url', content: this.router.url});
						this.meta.updateTag({ name:'og:image', content: '/assets/content/uploads/images' + this.media.pic_url});
						this.meta.updateTag({ name:'og:type', content: 'website'});
						this.meta.updateTag({ name:'image', content: '/assets/content/uploads/images' + this.media.pic_url});
					}
					if(this.media.description){
						this.meta.updateTag({ name:'og:description', content: this.media.description});
						this.meta.updateTag({ name:'description', content: this.media.description});
					}
					if(this.media.name) {
						this.meta.updateTag({ name:'og:name', content: this.media.name});
						this.meta.updateTag({ name:'name', content: this.media.name});
					}
			});
		} else {
			this.mediaService.getMedia(environment.num_results_per_page).subscribe((data: {}) => {
				this.media = data;
				if(this.media.title) {
					this.setTitle(this.media.title);
				}
				if(this.media.title) {
					this.setTitle(this.media.title);
				}
				if(this.media.title && this.media.pic_url) {
					this.meta.updateTag({ name:'og:title',content: this.media.title});
					this.meta.updateTag({ name:'og:url', content: this.router.url});
					this.meta.updateTag({ name:'og:image', content: '/assets/content/uploads/images' + this.media.pic_url});
					this.meta.updateTag({ name:'og:type', content: 'website'});
					this.meta.updateTag({ name:'image', content: '/assets/content/uploads/images' + this.media.pic_url});
				}
				if(this.media.description){
					this.meta.updateTag({ name:'og:description', content: this.media.description});
					this.meta.updateTag({ name:'description', content: this.media.description});
				}
				if(this.media.name) {
					this.meta.updateTag({ name:'og:name', content: this.media.name});
					this.meta.updateTag({ name:'name', content: this.media.name});
				}
			});
		}
		
  }

}
