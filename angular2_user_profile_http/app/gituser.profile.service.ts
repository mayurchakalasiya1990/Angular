import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

@Injectable()
export class GitUserProfileDetail{
	
	constructor(private _http: Http){

	}

	getUserDetail(gitId: string) : Observable{
		return this._http.get("https://api.github.com/users/"+gitId).map(res => res.json());
	}

	getFollower(gitId: string) : Observable{
		return this._http.get("https://api.github.com/users/"+gitId+"/followers").map(res => res.json());
	}	

}