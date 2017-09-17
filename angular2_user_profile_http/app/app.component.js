System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/add/observable/forkJoin', './gituser.profile.service'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, gituser_profile_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (gituser_profile_service_1_1) {
                gituser_profile_service_1 = gituser_profile_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_gituser) {
                    this._gituser = _gituser;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._gituser.getUserDetail("octocat").
                        subscribe(function (user) {
                        _this._user = user;
                        console.log("this._user:" + _this._user);
                    });
                    this._gituser.getFollower("octocat").
                        subscribe(function (followers) {
                        _this._followers = followers;
                        console.log("this._followers:" + _this._followers);
                    });
                    Observable_1.Observable.forkJoin(this._user, this._followers) //<- ERROR HERE
                        .subscribe(function (data) {
                        console.log(data);
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<h1>My First Angular 2 App</h1>',
                        providers: [gituser_profile_service_1.GitUserProfileDetail, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [gituser_profile_service_1.GitUserProfileDetail])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map