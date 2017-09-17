/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'rxjs/Observable', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/filter'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            /*
                import {Observable} from 'rxjs/Rx';
                above package have a lots of object which are not used at a time. so angular customise library according to use.
                like :
                        import {Observable} from 'rxjs/Observable';
                        import 'rxjs/add/operator/debounceTime';
                        import 'rxjs/add/operator/filter';
            
            */
            AppComponent = (function () {
                function AppComponent() {
                    var keyups = Observable_1.Observable.fromEvent($("#search"), "keyup").
                        map(function (e) { return e.target.value; }).
                        filter(function (text) { return text.length >= 3; }).
                        debounceTime(400).
                        distinctUntilChanged().
                        flatMap(function (searchText) {
                        var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchText;
                        var promise = $.getJSON(url);
                        return Observable_1.Observable.fromPromise(promise);
                    });
                    keyups.subscribe(function (data) { return console.log(data); });
                    keyups.unsubscribe();
                    /*
                        var debounced=_.debounce(function(text){
                            var  url="https://api.spotify.com/v1/search?type=artist&q="+text;
                            $.getJSON(url,function(artists){
                                console.log(artists);
                            });
                
                        },400);
                
                        $(#search).keyup(function(e){
                            var text = e.target.value;
                            if(text.length>3){
                                return;
                            }
                            debounced(text);
                        });
                
                    */
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <input id=\"search\" type=\"text\" class=\"form-control\">    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map