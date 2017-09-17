import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {ROUTER_PROVIDERS}    from 'angular2/router'

/*
	ROUTER_PROVIDERS is rigerster in boot.ts file thats its available anywhere in application.
	Same way we can configure HTTP server.
*/
bootstrap(AppComponent,[ROUTER_PROVIDERS]);