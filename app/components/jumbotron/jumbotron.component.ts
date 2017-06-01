import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
    private jbtHeading: string;
    private jbtText: string;
    private jbtBtnText: string;
    private jbtBtnUrl: string;

    constructor() {
        this.jbtHeading = "Hello World";
        this.jbtText = "Use this document as a way to quickly start any new project. All you get is this text and a mostly barebones HTML document."
        this.jbtBtnText = "Read More";
        this.jbtBtnUrl = "/about";
    }
}