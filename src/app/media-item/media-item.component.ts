import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {
	@Input() item;
    constructor() { }
	ngOnInit() {
		console.log(this.item);
    }

}
