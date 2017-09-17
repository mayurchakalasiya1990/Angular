import {Component} from 'angular2/core';
//import {RouteConfig,RouterOutlet,RouterLink} from 'angular2/router';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';



import {AlbumsComponent} from './albums.component';
import {AlbumComponent} from './album.component';
import {ContactComponent} from './contact.component';

/*

	- useAsDefault:true
		- set defualt route for application

	- Route=Other 
		- for handled all undefined route.
		- path:'/*other' means anything after forward / that not match in define routers
		- name:'Other' its router name
		- redirectTo:['Albums'] redirect to given route 'Albums'

	- ROUTER_DIRECTIVES is Array of [RouterOutlet,RouterLink,...]

*/

@RouteConfig([
	{path: '/albums', name:'Albums', component:AlbumsComponent,useAsDefault:true},
	{path: '/albums/:id', name:'Album', component:AlbumComponent},
	{path: '/contact', name:'Contact', component:ContactComponent},
	{path: '/*other', name:'Other', redirectTo:['Albums']}
])


@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    //directives:[RouterOutlet,RouterLink]
    directives:[ROUTER_DIRECTIVES]
})

export class AppComponent {
}