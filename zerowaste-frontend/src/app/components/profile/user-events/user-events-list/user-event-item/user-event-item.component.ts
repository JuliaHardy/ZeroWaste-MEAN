import {Component, Input, OnInit} from '@angular/core';
import * as moment from "moment";
import {EventsService} from "../../../../../services/events/events.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-user-event-item',
  templateUrl: './user-event-item.component.html',
  styleUrls: ['./user-event-item.component.css']
})
export class UserEventItemComponent implements OnInit {
  @Input() userEventItem: {
    name: string,
    description: string,
    eventImage: string,
    eventDate: string,
    _id: string};

  constructor(
    private eventService: EventsService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void {
  }

  formatDate(date) {
    let formatedDate = moment(date).format('LLLL')
    return formatedDate
  }

  onDeleteEvent() {
    this.eventService.deleteEvent(this.userEventItem._id).subscribe(
      (res: any) => { if (res.success) {
        this.flashMessage.show(
          res.msg,
          {cssClass: 'alert-success', timeout: 3000}
        );
      }
      else {
        this.flashMessage.show(
          res.msg,
          {cssClass: 'alert-danger', timeout: 5000}
        );
        console.log(res.error)
      }
      }
    )
  }

}
