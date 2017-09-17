/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
//import {Observable} from 'rxjs/Rx';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

/*
	import {Observable} from 'rxjs/Rx';
	above package have a lots of object which are not used at a time. so angular customise library according to use.
	like :
			import {Observable} from 'rxjs/Observable';
			import 'rxjs/add/operator/debounceTime';
			import 'rxjs/add/operator/filter';		

*/

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control">\
    `
})
export class AppComponent {
    constructor(){

    var keyups = Observable.fromEvent($("#search"),"keyup").
    	map(e=>e.target.value).
    	filter(text=>text.length>=3).
    	debounceTime(400).
    	distinctUntilChanged().
    	flatMap(searchText => {
    		var  url="https://api.spotify.com/v1/search?type=artist&q="+searchText;
	 		var promise=$.getJSON(url);
	 		return Observable.fromPromise(promise);
    	});
    	keyups.subscribe(data => console.log(data));
    	keyups.unsubscribe();

    /*
    	var debounced=_.debounce(function(text){
    		var  url="https://api.spotify.com/v1/search?type=artist&q="+text;
	 		$.getJSON(url,function(artists){
	 			console.log(artists);
	 		});

    	},400);

    	$(#search).keyup(function(e){ 		
	 		var text = e.target.value;
	 		if(text.length>3){
	 			return;
	 		}
			debounced(text);	 		
    	});

    */	

    }

    
}