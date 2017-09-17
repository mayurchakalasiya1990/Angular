import {Injectable} from 'angular2/core';

import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService { 

	constructor(private _http : Http){
		console.log('UserService constructor::');
	}

	static getUserAll(){
		console.log('getUserAll()');
		this._http.get("https://jsonplaceholder.typicode.com/users").map(res=> console.log(res.json()));
	}

}