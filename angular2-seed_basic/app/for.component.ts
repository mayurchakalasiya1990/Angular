import {Component} from 'angular2/core';

@Component({
    selector: 'for',
    template: ` <br/><h3>For Loop:</h3> \
                <ul> \
                    <li *ngFor="#course of courses, #i=index">\
                        {{i+1}} - {{course}} \
                    </li> \
                </ul>`
})
            
export class ForComponent {        
    courses=['course1','course2','course3'];
}