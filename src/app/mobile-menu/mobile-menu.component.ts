import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { UserService } from './../user.service';
import { PointsService } from './../points.service';


@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css'],
  providers : [
				AuthService,
				UserService,
				PointsService	
			]
})
export class MobileMenuComponent implements OnInit {
	user;
	point;
	constructor(
		private authService:AuthService,
		private userService:UserService,
		private pointsService:PointsService
	) { }

  ngOnInit() {
	let email = 'admin@admin.com';  
	this.userService.getUserByEmail(email).subscribe((data: {}) => {
			this.user = data[0];
			//console.log(this.user);
		if(this.user){
			this.pointsService.getPointByUserId(this.user.id).subscribe((data: {}) => {
				this.point = data[0];
				console.log(this.point);
			});
		}	
			
	});
	
	
  }

}
