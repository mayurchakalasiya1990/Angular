"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var github_service_1 = require("../shared/github.service");
var router_1 = require("@angular/router");
var RepoListComponent = (function () {
    function RepoListComponent(github, route) {
        this.github = github;
        this.route = route;
    }
    RepoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.org = params['org'];
            if (_this.org) {
                _this.repos = _this.github.getReposForOrg(_this.org);
            }
        });
    };
    RepoListComponent = __decorate([
        core_1.Component({
            selector: 'repo-list',
            styleUrls: ['./repo-list.component.css'],
            templateUrl: './repo-list.component.html',
        }),
        __metadata("design:paramtypes", [github_service_1.GithubService, router_1.ActivatedRoute])
    ], RepoListComponent);
    return RepoListComponent;
}());
exports.RepoListComponent = RepoListComponent;
//# sourceMappingURL=repo-list.component.js.map