import { Component, OnInit, Renderer2, ElementRef, Directive, ViewChild, ViewChildren } from '@angular/core';
import { SettingsService } from './../settings.service';

@Component({
  selector: 'app-home-social',
  templateUrl: './home-social.component.html',
  styleUrls: ['./home-social.component.css'],
  providers : [SettingsService]
})

@Directive({
  selector: '[app-home-social]'
})

export class HomeSocialComponent implements OnInit {
	
	//@ViewChildren("divTwitter", {read: ElementRef}) private divTwitter: ElementRef;
	//@ViewChild('divTwitter') divTwitter: ElementRef;
	
	@ViewChildren('divtwitter') divtwitter: QueryList<ElementRef>;
	@ViewChildren('divfacebook') divfacebook: QueryList<ElementRef>;
	@ViewChildren('divgoogle') divgoogle: QueryList<ElementRef>;
	
	settings;	
	constructor(
		private settingsService:SettingsService, 
		private renderer: Renderer2,
		private el: ElementRef) { }

	ngOnInit() {
	}
	
	public ngAfterViewInit(): void
	{
		this.settingsService.getSettings().subscribe((data: {}) => {
			this.settings = data[0];
			//console.log(this.settings);
			this.loadScriptTwitter();
			this.loadScriptFacebook();
			this.loadScriptGoogle();
		});
	}
	
	public loadScriptTwitter() {
		this.divtwitter.changes.subscribe((comps: QueryList<ElementRef>) =>
		{
			let script = this.renderer.createElement('script');
			script.innerHTML = '';
			script.src = 'https://platform.twitter.com/widgets.js';
			script.async = true;
			script.defer = true;
			script.charset = "utf-8";
			let text = this.renderer.createText('');
			this.renderer.appendChild(script, text);
			this.renderer.appendChild(comps.first.nativeElement, script);
		});
	}
	
	loadScriptFacebook(){
		this.divfacebook.changes.subscribe((comps: QueryList<ElementRef>) =>
		{	
			let script = this.renderer.createElement('script');
			script.async = true;
			script.defer = true;
			script.src = 'assets/js/facebook-like.js';
			script.charset = "utf-8";
			let text = this.renderer.createText('');
			this.renderer.appendChild(script, text);
			this.renderer.appendChild(comps.first.nativeElement, script);
		}
	}
	
	loadScriptGoogle() {
		this.divgoogle.changes.subscribe((comps: QueryList<ElementRef>) =>
		{	
			let script = this.renderer.createElement('script');
			script.async = true;
			script.defer = true;
			script.src = 'https://apis.google.com/js/platform.js';
			script.charset = "utf-8";
			let text = this.renderer.createText('');
			//this.renderer.appendChild(script, text);
			this.renderer.appendChild(comps.first.nativeElement, script);
			
			let div = this.renderer.createElement('div');	
			this.renderer.addClass(div, 'g-follow');
			this.renderer.setAttribute(div, 'data-annotation', "bubble");
			this.renderer.setAttribute(div, 'data-height', "20");
			this.renderer.setAttribute(div, 'data-rel', "publisher");
			//this.renderer.setAttribute(div, 'data-href', "//plus.google.com/u/0/106287962206400872348");
			this.renderer.setAttribute(div, 'data-href', "//plus.google.com/u/0/102950176604279621166");
			//this.renderer.setAttribute(div, 'data-href', "//plus.google.com/envato");
			this.renderer.appendChild(comps.first.nativeElement, div);
		}
	}
}

}
