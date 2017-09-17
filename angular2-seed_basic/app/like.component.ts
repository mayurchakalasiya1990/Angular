import {Component,Input,Output,EventEmitter} from 'angular2/core';

@Component({
    selector: 'like',
    templateUrl: 'app/like.template.html',
    styles: ['\
    	.glyphicon-heart{\
    		color:pink;\
            cursor:pointer;\
    	}\
    '],
    inputs: ['isLike:is-Like']
})

export class LikeComponent {		
	@Input('is-like') isLike=false;
	
    @Input() totalLikes=0;

    onClick(){			
		this.isLike = (this.isLike==true) ? false: true ;
        this.totalLikes	= this.isLike ? this.totalLikes+1 : this.totalLikes-1;
	}

}