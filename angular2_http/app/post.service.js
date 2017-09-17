System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var PostService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            /*
            
                - enable Http service :
                        1) import Http service
                        2) add http js file in index.html file.
            
                - @Injectable():
                        - its make sevice class injectable in other classes
                        - steps:
                                1) Import Injectable decorator
                                2) Add annotation on class @Injectable
            
            */
            PostService = (function () {
                function PostService(_http) {
                    this._http = _http;
                    this._url = "https://jsonplaceholder.typicode.com/posts";
                }
                /*
                    - get() method is used from server call using url pass in method.
                    - get() method returns observal object of response.
                    - map() methos is used to convert response object into json string.
            
                */
                PostService.prototype.getPosts = function () {
                    return this._http.get(this._url).map(function (res) { return res.json(); });
                };
                PostService.prototype.createPost = function (post) {
                    return this._http(this._url, JSON.stringify(post)).map(function (res) { return res.json(); });
                };
                PostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostService);
                return PostService;
            }());
            exports_1("PostService", PostService);
        }
    }
});
//# sourceMappingURL=post.service.js.map