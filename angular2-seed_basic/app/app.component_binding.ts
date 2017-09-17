import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>Angular Application</h1>\
    <h1>Two way Binding</h1> \
  	<input type="text" 	[value]="title" (input)="title=$event.target.value"/> \
  	<input type="text" [value]="title" [(ngModel)]="title"/> \
  	<input type="text" [value]="title" bindon-ngModel="title"/>\
  	<input type="button" (click)="onClick()"value="clear"/>\
  	<label>{{title}}</label>\
  	<br/>\
  	<h1>tutorial</h1> \
  	<p>Star icon: <i class="glyphicon" \
  	[class.glyphicon-star]="isStarFill" \
  	 [class.glyphicon-star-empty]="!isStarFill" \
  			(click)="onClickStar()"></i></p> \
   '
})

export class AppComponent {
		
		isActive=true;
		isStarFill =true;
		title='Angular two way binding';
		onClick(){
			this.title='';
		}

		onClickStar(){
			
			this.isStarFill = (this.isStarFill==true) ? false: true ;
			console.log('onClickStar:'+this.isStarFill);

		}
}