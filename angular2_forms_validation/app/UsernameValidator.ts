import {Control} from 'angular2/common';


/*
	- export keyword is allow other class to import UsernameValidator class.

	- Custome Validation Rule:
		1) Validation pass successfully : return null
		2) Validation Failed: return {<validationRule>:<value>}

	- Arrow/Lambda Function:
		normal function:
			function(message){
				console.log(message);
			}
		Lambda function:
			message => {console.log(message);} - for single input param	
			(message,message1) => {console.log(message);} - for multiple input params	

			general format: param=>body

	- Promise:
			- A promise represents the eventual result of an asynchronous operation. It is a placeholder into which the successful result value or reason for failure will materialize.
			- The Promise constructor takes a function (an executor) that will be executed immediately and passes in two functions: 	resolve: which must be called when the Promise is resolved (passing a result), 
			 	reject : when it is rejected (passing an error).
			- Refer Promise structure in screenshot.
			- Refrence url: https://developers.google.com/web/fundamentals/getting-started/primers/promises 



*/

export class UsernameValidator{


	static shouldBeUnique(control: Control){
		return new Promise((resolve,reject)=>{
			
			setTimeout(function(){
				console.log(control.value);
				if(control.value=="mayur"){

					return resolve({shouldBeUnique:true});
				}
				else{
					return resolve(null);	
				}

			},1000);
		});
	}

	static cannotContainSpace(control: Control){

		if(control.value.indexOf(' ') >=0){
			return {cannotContainSpace:true};
		}
		return null;

	}
	
}