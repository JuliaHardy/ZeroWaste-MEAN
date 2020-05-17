import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faThumbsDown, faThumbsUp, faUserFriends, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { ShopsComponent } from "./components/shops/shops.component";
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ValidateService } from "./services/validate/validate.service";
import { AuthService } from "./services/auth/auth.service";
import { EmitEventService } from "./services/emitter/emit-event.service";
import { FlashMessagesModule } from "angular2-flash-messages";
import { EventsListComponent } from './components/events/events-list/events-list.component';
import { EventItemComponent } from './components/events/events-list/event-item/event-item.component';
import { EventsService } from "./services/events/events.service";
import { UserEventsComponent } from './components/profile/user-events/user-events.component';
import { UserEventsListComponent } from './components/profile/user-events/user-events-list/user-events-list.component';
import { UserEventFormComponent } from './components/profile/user-events/user-event-form/user-event-form.component';
import { UserEventItemComponent } from './components/profile/user-events/user-events-list/user-event-item/user-event-item.component';
import { HomeItemComponent } from './components/home/home-item/home-item.component';
import { EventsManagerComponent } from './components/events/events-manager/events-manager.component';
import {UserShopsComponent} from "./components/profile/user-shops/user-shops.component";
import {UserShopsListComponent} from "./components/profile/user-shops/user-shops-list/user-shops-list.component";
import {UserShopsItemComponent} from "./components/profile/user-shops/user-shops-list/user-shops-item/user-shops-item.component";
import {UserShopFormComponent} from "./components/profile/user-shops/user-shop-form/user-shop-form.component";
import {ShopsService} from "./services/shops/shops.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EventsComponent,
    ShopsComponent,
    ProfileComponent,
    EventsListComponent,
    EventItemComponent,
    UserEventsComponent,
    UserEventsListComponent,
    UserEventFormComponent,
    UserEventItemComponent,
    UserShopsComponent,
    UserShopsListComponent,
    UserShopsItemComponent,
    UserShopFormComponent,
    HomeItemComponent,
    EventsManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    ValidateService,
    AuthService,
    EventsService,
    ShopsService,
    EmitEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faThumbsDown, faThumbsUp, faUserFriends, faArrowDown, faArrowUp);
  }
}
