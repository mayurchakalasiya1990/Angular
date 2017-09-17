import {Component,Input} from 'angular2/core';

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles: ['\
    	.glyphicon-star{\
    		color:orange;\
    	}\
    '],
    inputs: ['isFavorite:is-favorite']
})

export class FavoriteComponent {		
	@Input('is-favorite') isFavorite=false;
	onClick(){			
		this.isFavorite = (this.isFavorite==true) ? false: true ;
		console.log('onClickStar:'+this.isFavorite);
	}
}