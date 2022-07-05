import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'wpopup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
    public show: boolean = false;
    public title: any;
    public text: any;
    onClick() {
        this.show = !this.show
    }
    constructor() { }
}
