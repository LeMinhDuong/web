import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { UserService } from './../user.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css'],
  providers : [
				AuthService,
				UserService	
			]
})
export class MobileMenuComponent implements OnInit {
	user;
	constructor(
		private authService:AuthService,
		private userService:UserService
	) { }

  ngOnInit() {
	let email = 'admin@admin.com';  
	this.userService.getUserByEmail(email).subscribe((data: {}) => {
			this.user = data[0];
			console.log(this.user);
	});
  }

}
