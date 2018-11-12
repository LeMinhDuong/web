import { Component, OnInit } from '@angular/core';
import {IpService} from './../ip.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers : [IpService]
})
export class DemoComponent implements OnInit {
	
	ip: string;
	constructor(private ipService:IpService) { }

	ngOnInit() {
		this.obj = this.ipService.getIp().subscribe((data: {}) => {
			this.ip = data['ip'];
			console.log(this.ip);
		});
		
	}

}
