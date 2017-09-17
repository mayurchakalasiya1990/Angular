import {Component} from 'angular2/core';
import {ControlGroup,Control,Validators,FormBuilder} from 'angular2/common';
import {UsernameValidator} from './UsernameValidator'

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {

	//Model Driven form
	//form=new ControlGroup({
	//	username: new Control('',Validators.required),
	//	password: new Control('',Validators.required)
	//});

	form: ControlGroup;

	/*
			- group(): method return ControlGroup with username and password controls.
				its ease and clean way to create controls and controlgroup. 
			- Validators.compose([]) - method take Validators(user defined + defined by angular)
			- UsernameValidator.cannotContainSpace() is custom validation method of Class UsernameValidator.ts

	*/
	constructor(fb:FormBuilder){

		this.form=fb.group({
			username:[
						'', // Dfault value of control (1st element of array)
						Validators.compose([ //(2nd element of array)
							Validators.required, // SynValidator 
							UsernameValidator.cannotContainSpace // SynValidator 
						]),
						UsernameValidator.shouldBeUnique //Asynch validator(3nd element of array)
					],

			password:['',Validators.required]
		});
	}

	signUp(){
		console.log(this.form.value);
	}
}