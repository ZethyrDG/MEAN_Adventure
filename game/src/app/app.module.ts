import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HouseComponent } from './house/house.component';
import { CastleComponent } from './castle/castle.component';
import { SpaceComponent } from './space/space.component';
import { FrontRoomComponent } from './house/front-room/front-room.component';
import { GarageComponent } from './house/garage/garage.component';
import { KitchenComponent } from './house/kitchen/kitchen.component';
import { LibraryComponent } from './house/library/library.component';
import { BathroomComponent } from './house/bathroom/bathroom.component';
import { BasementComponent } from './house/basement/basement.component';
import { ParlorComponent } from './house/parlor/parlor.component';
import { MasterBedroomComponent } from './house/master-bedroom/master-bedroom.component';
import { MyBedroomComponent } from './house/my-bedroom/my-bedroom.component';
import { UpstairsLandingComponent } from './house/upstairs-landing/upstairs-landing.component';
import { AtticComponent } from './house/attic/attic.component';
import { BackyardComponent } from './house/backyard/backyard.component';
import { ShedComponent } from './house/shed/shed.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HouseComponent,
    CastleComponent,
    SpaceComponent,
    FrontRoomComponent,
    GarageComponent,
    KitchenComponent,
    LibraryComponent,
    BathroomComponent,
    BasementComponent,
    ParlorComponent,
    MasterBedroomComponent,
    MyBedroomComponent,
    UpstairsLandingComponent,
    AtticComponent,
    BackyardComponent,
    ShedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
