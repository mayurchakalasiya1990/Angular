System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor() {
                    this.isActive = true;
                    this.isStarFill = true;
                    this.title = 'Angular two way binding';
                }
                onClick() {
                    this.title = '';
                }
                onClickStar() {
                    this.isStarFill = (this.isStarFill == true) ? false : true;
                    console.log('onClickStar:' + this.isStarFill);
                }
            };
            AppComponent = __decorate([
                core_1.Component({
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
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component_binding.js.map