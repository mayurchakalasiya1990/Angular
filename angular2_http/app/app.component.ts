import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'anglar2/core';

import {PostService} from './post.service';


/*
	To User Post Service:
		1) import serivce i.e. import {PostService} from './post.service';
		2) Service must be injectable to inject in other class or compoent
		3) Our service dependent on Http service so we need to dependent Http service in class or component
		4) Injector class scans service to inject service. for scanning of Service we need to add service in provider array of 			@Component. i.e.
		5) HTTP_PROVIDERS is array of http related objects which have a http object(http is dependent object of PostService). 

*/
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>',
    providers: [PostService,HTTP_PROVIDERS]
})
export class AppComponent implements OnInit{ 

	constructor(private _postService: PostService){	
	}

	ngOnInit(){
		this._postService.getPosts().subscribe(posts => console.log(posts[0].title));
	}

}