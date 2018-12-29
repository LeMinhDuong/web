import { Component, Input } from '@angular/core';
import { AuthService } from './auth.service';
import { SettingsService } from './settings.service';
import {MediaService} from './media.service';
import {CatergoryService} from './catergory.service';
import {PagesService} from './pages.service';
import { PointsService } from './points.service';
import { UserService } from './user.service';
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
	AuthService,
	SettingsService,
	MediaService,
	CatergoryService,
	PagesService,
	PointsService,
	UserService
	]
})
export class AppComponent {
	title = 'web';
	settings;
	media;
	categories;
	pages;
	point;
	user;
	
	today: number = Date.now();
	@Input() search: string;
	constructor(
		private authService:AuthService,
		private settingsService:SettingsService,
		private mediaService:MediaService,
		private catergoryService:CatergoryService,
		private pagesService:PagesService,
		private pointsService:PointsService,
		private userService:UserService,
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
			
			this.catergoryService.getCatergory().subscribe((data: {}) => {
				this.categories = data;
			});
			
			this.pagesService.getPage().subscribe((data: {}) => {
				this.pages = data;
			});
			
			let email = 'admin@admin.com';  
			this.userService.getUserByEmail(email).subscribe((data: {}) => {
					this.user = data[0];
				if(this.user){
					this.pointsService.getPointByUserId(this.user.id).subscribe((data: {}) => {
						this.point = data[0];
					});
				}
			});
			
			this.meta.updateTag({ name:'viewport',content:'initial-scale=1'});
			sessionStorage.removeItem('search');
		}
	
	public setTitle(title: string) {
		this.titleService.setTitle( title );
	}	
	
}
