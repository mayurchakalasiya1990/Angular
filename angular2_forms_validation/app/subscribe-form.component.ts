import {Component} from 'angular2/core';

@Component({
    selector: 'subscribe-form',
    templateUrl: 'app/subscribe-form.component.html'
})
export class SubscribeFormComponent { 
	frequencies=['daily','weekly','monthly'];

	onSubmit(form){
		console.log(form);
	}
}