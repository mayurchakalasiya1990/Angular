import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router';

import {NavComponent} from './nav.component';
import {UserComponent} from './user.component';
import {PostsComponent} from './user.posts.component';
import {HomeComponent} from './home.component';
import {CreateUserComponent} from './create.user.component';


@RouteConfig([
	{path:'/',name:'Home',component: HomeComponent	},
	{path:'/user',name:'User',component: UserComponent},
	{path:'/user/new',name:'CreateUser',component: CreateUserComponent},
	{path:'/posts',name:'Posts',component: PostsComponent},
	{path:'/*other',name:'Other',redirectTo:['Home']}
])

@Component({
    selector: 'my-app',
    template: '<nav-bar></nav-bar> \
    		<router-outlet></router-outlet> \
    ',
    directives:[NavComponent,ROUTER_DIRECTIVES], 
    providers:[ROUTER_DIRECTIVES]

})
export class AppComponent { }