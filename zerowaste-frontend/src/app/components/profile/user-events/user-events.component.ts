import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {
  @Input() userEvents: [];

  constructor() { }

  ngOnInit(): void {
  }

}
