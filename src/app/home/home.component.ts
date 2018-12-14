import { Component, OnInit, Input , Renderer2, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { SettingsService } from './../settings.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [SettingsService]
})
export class HomeComponent implements OnInit {

	settings;
	@Input() search: string;
	@ViewChildren('divmobilepullright') divmobilepullright: QueryList<ElementRef>;
	
	constructor(
	private settingsService:SettingsService,
	private renderer: Renderer2,
	private el: ElementRef) { }

	ngOnInit() {
		this.settingsService.getSettings().subscribe((data: {}) => {
			this.settings = data[0];
			
		});
	}
	public ngAfterViewInit(): void
	{
		this.loadScript();
	}
	
	loadScript() {
		//console.log(this.divmobilepullright);
		//this.divmobilepullright.changes.subscribe((comps: QueryList<ElementRef>) =>
		//{
			let script = this.renderer.createElement('script');
			script.innerHTML = '';
			script.src = 'assets/js/mobilepullright.js';
			script.async = true;
			script.defer = true;
			script.charset = "utf-8";
			let text = this.renderer.createText('');
			this.renderer.appendChild(script, text);
			//console.log(script);
			this.renderer.appendChild(this.divmobilepullright.first.nativeElement, script);
		//});
	}
	
}
