import {Component} from 'angular2/core';
import {FormBuilder, FormGroup, Validators,ControlGroup,Control} from 'angular2/common';

@Component({
	selector:'newuser-form',
    templateUrl: './app/create.user.html'
})


export class CreateUserComponent {

	form : FormGroup;
	constructor(private _fb: FormBuilder){
		
		this.form=this._fb.group({
			userName:['',Validators.compose(Validators.required)],
			email:['',Validators.compose(Validators.required)]
		});

	}

	
}