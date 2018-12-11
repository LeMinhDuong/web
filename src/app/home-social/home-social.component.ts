import { Component, OnInit } from '@angular/core';
import { SettingsService } from './../settings.service';

@Component({
  selector: 'app-home-social',
  templateUrl: './home-social.component.html',
  styleUrls: ['./home-social.component.css'],
  providers : [SettingsService]
})
export class HomeSocialComponent implements OnInit {
	
	settings;	
	constructor(private settingsService:SettingsService) { }

	ngOnInit() {
		this.settingsService.getSettings().subscribe((data: {}) => {
			this.settings = data[0];
			console.log(this.settings);
		});
		//this.loadScript('assets/js/twitter-follow.js');
	}
	public loadScript(url) {
		let node = document.createElement('script');
		node.src = url;
		node.type = 'text/javascript';
		document.getElementsByTagName('head')[0].appendChild(node);
	}
}

}
