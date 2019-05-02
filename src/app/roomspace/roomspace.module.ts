import { NgModule } from '@angular/core';
import { RoomSpaceComponent } from './roomspace.component';
import { BrowserModule } from '@angular/platform-browser';
import { ViewRoomSpaceComponent } from './view.component';
import { PaymentDetailsComponent } from './paymentdetails.component';


@NgModule({
    declarations: [RoomSpaceComponent,ViewRoomSpaceComponent,PaymentDetailsComponent
    ],
    imports:[BrowserModule],
    exports:[RoomSpaceComponent,ViewRoomSpaceComponent,PaymentDetailsComponent
    ]
    

    
})

export class RoomSpaceModule{

}