import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseComponent } from './house/house.component';
import { CastleComponent } from './castle/castle.component';
import { SpaceComponent } from './space/space.component';
import { TowerComponent } from './castle/tower/tower.component';
import { TowerpuzzleComponent } from './castle/towerpuzzle/towerpuzzle.component';
import { MainroomComponent } from './castle/mainroom/mainroom.component';
import { HallwayComponent } from './castle/hallway/hallway.component';
import { HallwaypuzzleComponent } from './castle/hallwaypuzzle/hallwaypuzzle.component';
import { HallwaysecretComponent } from './castle/hallwaysecret/hallwaysecret.component';
import { HallwayescapeComponent } from './castle/hallwayescape/hallwayescape.component';
import { HallwayduelComponent } from './castle/hallwayduel/hallwayduel.component';
import { HallwaywandComponent } from './castle/hallwaywand/hallwaywand.component';
import { Dungeonroom1Component } from './castle/dungeonroom1/dungeonroom1.component';
import { Dungeonroom1puzzleComponent } from './castle/dungeonroom1puzzle/dungeonroom1puzzle.component';
import { Dungeonroom2Component } from './castle/dungeonroom2/dungeonroom2.component';
import { Dungeonroom2puzzleComponent } from './castle/dungeonroom2puzzle/dungeonroom2puzzle.component';
import { Dungeonroom3Component } from './castle/dungeonroom3/dungeonroom3.component';
import { Dungeonroom3puzzleComponent } from './castle/dungeonroom3puzzle/dungeonroom3puzzle.component';
import { DungeonspellbookComponent } from './castle/dungeonspellbook/dungeonspellbook.component';
import { LabComponent } from './castle/lab/lab.component';
import { LablockpuzzleComponent } from './castle/lablockpuzzle/lablockpuzzle.component';
import { LabguardianpuzzleComponent } from './castle/labguardianpuzzle/labguardianpuzzle.component';
import { LabbookpuzzleComponent } from './castle/labbookpuzzle/labbookpuzzle.component';
import { LabcombinepuzzleComponent } from './castle/labcombinepuzzle/labcombinepuzzle.component';
import { LabpotionComponent } from './castle/labpotion/labpotion.component';

@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    CastleComponent,
    SpaceComponent,
    TowerComponent,
    TowerpuzzleComponent,
    MainroomComponent,
    HallwayComponent,
    HallwaypuzzleComponent,
    HallwaysecretComponent,
    HallwayescapeComponent,
    HallwayduelComponent,
    HallwaywandComponent,
    Dungeonroom1Component,
    Dungeonroom1puzzleComponent,
    Dungeonroom2Component,
    Dungeonroom2puzzleComponent,
    Dungeonroom3Component,
    Dungeonroom3puzzleComponent,
    DungeonspellbookComponent,
    LabComponent,
    LablockpuzzleComponent,
    LabguardianpuzzleComponent,
    LabbookpuzzleComponent,
    LabcombinepuzzleComponent,
    LabpotionComponent
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
