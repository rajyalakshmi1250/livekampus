import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CityModule } from './city/city.module';
import { EventModule } from './event/event.module';
import { RoomSpaceComponent } from './roomspace/roomspace.component';
import { RoomSpaceModule } from './roomspace/roomspace.module';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    CityModule,
    EventModule,
    RoomSpaceModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
    
  ]
})
export class AppModule { }
