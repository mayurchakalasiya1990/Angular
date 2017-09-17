import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Post} from './post'.

/*

	- enable Http service :
			1) import Http service
			2) add http js file in index.html file.

	- @Injectable():
			- its make sevice class injectable in other classes
			- steps:
					1) Import Injectable decorator
					2) Add annotation on class @Injectable

*/

@Injectable()
export class PostService{
	
	private _url = "https://jsonplaceholder.typicode.com/posts";

	constructor(private _http: Http){

	}

	/*
		- get() method is used from server call using url pass in method.
		- get() method returns observal object of response.
		- map() methos is used to convert response object into json string.

	*/
	getPosts(): Observable<Post[]>{
		return this._http.get(this._url).map(res => res.json());
	}

	createPost(post: Post){
		return this._http(this._url,JSON.stringify(post)).map(res => res.json());
	}
}