import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  constructor(){}
  @Input() useerCount=0;
  @Output() getUsersEvent=new EventEmitter();

  getAllUsers(){
    this.getUsersEvent.emit('get all users');
  }

}
