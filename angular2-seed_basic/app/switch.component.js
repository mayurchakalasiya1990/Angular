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
    var SwitchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let SwitchComponent = class SwitchComponent {
                constructor() {
                    this.viewMode = 'map';
                }
            };
            SwitchComponent = __decorate([
                core_1.Component({
                    selector: 'switch',
                    template: `<br/> <h3>Switch:</h3> \
        
        <ul class="nav nav-pills">\
            <li [class.active]="viewMode=='map'"><a (click)="viewMode = 'map' ">Map View</a></li>\
            <li [class.active]="viewMode=='list'"><a (click)="viewMode='list'">List View</a></li>\
        </ul>\
        <div [ngSwitch]="viewMode"> \
            <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map view Content</template> \
            <template [ngSwitchWhen]="'list'">List view Content</template> \
        </div>`
                }), 
                __metadata('design:paramtypes', [])
            ], SwitchComponent);
            exports_1("SwitchComponent", SwitchComponent);
        }
    }
});
//# sourceMappingURL=switch.component.js.map