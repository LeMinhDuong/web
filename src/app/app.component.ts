import { Component, Input } from '@angular/core';
import { SettingsService } from './settings.service';
import {MediaService} from './media.service';
import {CatergoryService} from './catergory.service';
import {PagesService} from './pages.service';

import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
	@Input() search: String;
	constructor(
		private settingsService:SettingsService,
		private mediaService:MediaService,
		private catergoryService:CatergoryService,
		private pagesService:PagesService
		) {
			this.settingsService.getSettings().subscribe((data: {}) => {
				this.settings = data[0];
				console.log(this.settings);
			});
			
			if(this.search)
			{
				this.mediaService.getMediaBySearch(this.search, environment.num_results_per_page)
					.subscribe((data: {}) => {
						this.media = data;
						console.log(this.media);
				});
			} else {
				this.mediaService.getMedia(environment.num_results_per_page).subscribe((data: {}) => {
					this.media = data;
					console.log(this.media);
				});
			}
			
			this.catergoryService.getCatergory().subscribe((data: {}) => {
				this.catergories = data;
				console.log(this.catergories);
			});
			
			this.pagesService.getPage().subscribe((data: {}) => {
				this.pages = data;
				console.log(this.pages);
			});
			
		}
	
}
