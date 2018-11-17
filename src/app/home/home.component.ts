import { Component, OnInit } from '@angular/core';
import { SettingsService } from './../settings.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [SettingsService]
})
export class HomeComponent implements OnInit {

	settings;
	constructor(private settingsService:SettingsService) { }

	ngOnInit() {
		/*this.settingsService.getSettings().subscribe((data: {}) => {
			this.settings = data[0];
			//console.log(this.settings);
		});*/
	}
	
}
