import {Component,OnInit} from 'angular2/core';
import {UserService} from './user.service';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';


@Component({
	selector:'user',
    templateUrl: './app/user.html',
    providers:[UserService],
	directives:[ROUTER_DIRECTIVES]    

})


export class UserComponent implements OnInit{

	/* constructor(private _service: UserService){
		//console.log('UserComponent constructor::'+this._service[0]);
	} */

	ngOnInit(){
		//console.log('UserComponent ngOnint::'+this._service[0]);
		//UserService.getUserAll().subscribe(users=> console.log(users));		
		//console.log('UserComponent ngOnint');
	}

}