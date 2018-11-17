import { Component, Input } from '@angular/core';
import { SettingsService } from './settings.service';
import {MediaService} from './media.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [
	SettingsService,
	MediaService
	]
})
export class AppComponent {
	title = 'web';
	settings;
	media;
	@Input() search: String;
	constructor(
		private settingsService:SettingsService,
		private mediaService:MediaService
		) {
		/*this.settingsService.getSettings().subscribe((data: {}) => {
			this.settings = data[0];
		});*/
		this.mediaService.getMedia().subscribe((data: {}) => {
			this.media = data;
			console.log(this.media);
		});
		
		if(this.search)
		{
			console.log('co gia tri');
		}
	}
	
}
