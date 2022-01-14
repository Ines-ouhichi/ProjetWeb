import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FakeSessionItemService } from '../fake-session-item.service';

import {Session} from '../session';
@Component({
selector: 'app-session-edit-form',
templateUrl: './session-edit-form.component.html',
styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
tracks = ['MEAN', 'Angular','NodeJS', 'Android', 'Swift', 'Xamarin'];
session :Session;
constructor(private sessionItemService: FakeSessionItemService) { }
ngOnInit() {
    this.session = this.sessionItemService.getSession(1);
    }
editSession(sessionItem: NgForm): void{
    console.log(sessionItem);
}
}