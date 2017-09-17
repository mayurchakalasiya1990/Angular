import {Component} from 'angular2/core';
import {ContactFormComponent} from './contact-form.component'
import {SubscribeFormComponent} from './subscribe-form.component'
import {SignUpFormComponent} from './signup-form.component'

@Component({
    selector: 'my-app',
    directives: [ContactFormComponent,SubscribeFormComponent,SignUpFormComponent],
    template: '<h1>Contact Us Form(Angular Pre-define Validation)</h1> \
    	<contact-form></contact-form> \
    	<br/><h1>Subscribe Form(Angular Pre-define Validation)</h1> \
    	<subscribe-form></subscribe-form> \
    	<br/><h1>SignUp Form(Custom Validation)</h1> \
    	<signup-form></signup-form> \
    '
})
export class AppComponent { }