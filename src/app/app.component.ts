import { Component, Input } from '@angular/core';
import { SettingsService } from './settings.service';
import {MediaService} from './media.service';
import {CatergoryService} from './catergory.service';
import {PagesService} from './pages.service';
import { Title , Meta}     from '@angular/platform-browser';

import { environment } from './../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
	'./app.component.css',
	],
  providers : [
	SettingsService,
	MediaService,
	CatergoryService,
	PagesService
	]
})
export class AppComponent {
	title = 'web';
	settings;
	media;
	catergories;
	pages;
	@Input() search: string;
	constructor(
		private settingsService:SettingsService,
		private mediaService:MediaService,
		private catergoryService:CatergoryService,
		private pagesService:PagesService,
		private titleService: Title,
		private meta: Meta,
		private router: Router
		) {
			this.settingsService.getSettings().subscribe(res =>
				{
					this.settings = res[0];
					this.setTitle(this.settings.website_name+" - "+ this.settings.website_description);
				}
			
			);
			
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
						}
						if(this.media.description){
							this.meta.updateTag({ name:'og:description', content: this.media.description});
						}
						if(this.media.name) {
							this.meta.updateTag({ name:'og:name', content: this.media.name});
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
					}
					if(this.media.description){
						this.meta.updateTag({ name:'og:description', content: this.media.description});
					}
					if(this.media.name) {
						this.meta.updateTag({ name:'og:name', content: this.media.name});
					}
				});
			}
			
			this.catergoryService.getCatergory().subscribe((data: {}) => {
				this.catergories = data;
			});
			
			this.pagesService.getPage().subscribe((data: {}) => {
				this.pages = data;
			});
			
			this.meta.updateTag({ name:'viewport',content:'initial-scale=1'});
			
		}
	
	public setTitle(title: string) {
		
		this.titleService.setTitle( title );
	}	
	
}
