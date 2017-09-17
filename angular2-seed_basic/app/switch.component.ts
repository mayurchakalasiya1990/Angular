import {Component} from 'angular2/core';

@Component({
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
})
            
export class SwitchComponent {        
    viewMode='map';

}