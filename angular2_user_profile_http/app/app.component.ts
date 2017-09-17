import {Component,OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import {GitUserProfileDetail} from './gituser.profile.service';


@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>',
    	
    providers:[GitUserProfileDetail,HTTP_PROVIDERS]
})
export class AppComponent implements OnInit{ 


	private _user: Observable;
    private _followers: Observable;
	
	constructor(private _gituser: GitUserProfileDetail){


	}


	ngOnInit(){
		this._gituser.getUserDetail("octocat").
						subscribe(user => {
							this._user=user;
							console.log("this._user:"+this._user);
						});
		
		this._gituser.getFollower("octocat").
						subscribe(followers => {
							this._followers=followers
							console.log("this._followers:"+this._followers);
						});
		Observable.forkJoin(this._user,this._followers) //<- ERROR HERE
        				.subscribe(data => {
            				console.log(data);
         				});
	}
} 