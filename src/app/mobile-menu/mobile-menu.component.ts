import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { UserService } from './../user.service';
import { PointsService } from './../points.service';
import { CategoriesService } from './../categories.service';
import { SettingsService } from './../settings.service';
import { PagesService } from './../pages.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css'],
  providers : [
				AuthService,
				UserService,
				PointsService,
				CategoriesService	
			]
})
export class MobileMenuComponent implements OnInit {
	user;
	point;
	categories;
	settings;
	pages;
	issignin;
	constructor(
		private authService:AuthService,
		private userService:UserService,
		private pointsService:PointsService,
		private categoriesService:CategoriesService,
		private settingsService:SettingsService,
		private pagesService:PagesService,
		private router: Router
	) { }

  ngOnInit() {
	let email = 'admin@admin.com';  
	this.userService.getUserByEmail(email).subscribe((data: {}) => {
			this.user = data[0];
			//console.log(this.user);
		if(this.user){
			this.pointsService.getPointByUserId(this.user.id).subscribe((data: {}) => {
				this.point = data[0];
				//console.log(this.point);
				//console.log(this.router.url);
			});
			this.categoriesService.getCatergories().subscribe((data: {}) => {
				//console.log(data);
				this.categories = data;
			});
			
			this.settingsService.getSettings().subscribe(res =>
				{
					this.settings = res[0];
					//console.log(this.settings);
				}
			);
			this.pagesService.getPage().subscribe(res =>
				{
					this.pages = res;
					//console.log(this.pages);
				}
			);	
		}	
			
	});
	
	
  }

}
