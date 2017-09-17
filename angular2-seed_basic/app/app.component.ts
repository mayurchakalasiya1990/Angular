import {Component} from 'angular2/core';
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {SwitchComponent} from './switch.component'
import {ForComponent} from './for.component'


@Component({
    selector: 'my-app',
    template:`<switch></switch>\
    <for></for>`,
    directives:[FavoriteComponent,LikeComponent,SwitchComponent,ForComponent]    
})
   
export class AppComponent {
		post = {
      isFavorite:true,
      title:"Favorite"
    };

    like = {
      isLike:true,
      title:"like",
      likeCnt:10
    };
}

/* 
    template: '<h1>Reusable Component</h1>\
    <i class="glyphicon glyphicon-star"></i> \
    <favorite [is-favorite]="post.isFavorite"></favorite>\
    <like [is-like]="like.isLike" [totalLikes]="like.likeCnt"></like> 

    template:`<switch></switch>\
    <for></for> \
      `
*/