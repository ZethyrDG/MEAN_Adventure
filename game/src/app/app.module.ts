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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HouseComponent,
    CastleComponent,
    SpaceComponent
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
