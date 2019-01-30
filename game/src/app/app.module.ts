import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { TowerComponent } from './castle/tower/tower.component';
import { TowerpuzzleComponent } from './castle/towerpuzzle/towerpuzzle.component';
import { MainroomComponent } from './castle/mainroom/mainroom.component';
import { HallwayComponent } from './castle/hallway/hallway.component';
import { HallwaypuzzleComponent } from './castle/hallwaypuzzle/hallwaypuzzle.component';
import { HallwaysecretComponent } from './castle/hallwaysecret/hallwaysecret.component';
import { HallwayescapeComponent } from './castle/hallwayescape/hallwayescape.component';
import { HallwayescapepuzzleComponent } from './castle/hallwayescapepuzzle/hallwayescapepuzzle.component';
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
import { SpaceroomComponent } from './space/spaceroom/spaceroom.component';
import { SpaceroompuzzleComponent } from './space/spaceroompuzzle/spaceroompuzzle.component';
import { ControlcenterComponent } from './space/controlcenter/controlcenter.component';
import { NavigationroomComponent } from './space/navigationroom/navigationroom.component';
import { Navigationpuzzle1Component } from './space/navigationpuzzle1/navigationpuzzle1.component';
import { Navigationroom2Component } from './space/navigationroom2/navigationroom2.component';
import { Navigationpuzzle2Component } from './space/navigationpuzzle2/navigationpuzzle2.component';
import { Navigationroom3Component } from './space/navigationroom3/navigationroom3.component';
import { Navigationpuzzle3Component } from './space/navigationpuzzle3/navigationpuzzle3.component';
import { NavigationsuccessComponent } from './space/navigationsuccess/navigationsuccess.component';
import { Dataroom1Component } from './space/dataroom1/dataroom1.component';
import { Dataroom2Component } from './space/dataroom2/dataroom2.component';
import { Dataroom3Component } from './space/dataroom3/dataroom3.component';
import { Datapuzzle1Component } from './space/datapuzzle1/datapuzzle1.component';
import { Datapuzzle2Component } from './space/datapuzzle2/datapuzzle2.component';
import { Datapuzzle3Component } from './space/datapuzzle3/datapuzzle3.component';
import { DatasuccessComponent } from './space/datasuccess/datasuccess.component';
import { EngineroomComponent } from './space/engineroom/engineroom.component';
import { Fixpartpuzzle1Component } from './space/fixpartpuzzle1/fixpartpuzzle1.component';
import { Fixpartpuzzle2Component } from './space/fixpartpuzzle2/fixpartpuzzle2.component';
import { Fixpartpuzzle3Component } from './space/fixpartpuzzle3/fixpartpuzzle3.component';
import { EnginerepairedComponent } from './space/enginerepaired/enginerepaired.component';
import { CaptainsroomComponent } from './space/captainsroom/captainsroom.component';
import { TempleComponent } from './temple/temple.component';
import { StaircaseComponent } from './temple/staircase/staircase.component';
import { TempleentranceComponent } from './temple/templeentrance/templeentrance.component';
import { EntrancepuzzleComponent } from './temple/entrancepuzzle/entrancepuzzle.component';
import { HallsComponent } from './temple/halls/halls.component';
import { BluebridgeComponent } from './temple/bluebridge/bluebridge.component';
import { BluebridgepuzzleComponent } from './temple/bluebridgepuzzle/bluebridgepuzzle.component';
import { BluedoorComponent } from './temple/bluedoor/bluedoor.component';
import { BluedoorpuzzleComponent } from './temple/bluedoorpuzzle/bluedoorpuzzle.component';
import { BlueflameComponent } from './temple/blueflame/blueflame.component';
import { BluepassageComponent } from './temple/bluepassage/bluepassage.component';
import { RedpassageComponent } from './temple/redpassage/redpassage.component';
import { RedfireComponent } from './temple/redfire/redfire.component';
import { RedfirepuzzleComponent } from './temple/redfirepuzzle/redfirepuzzle.component';
import { RedwindComponent } from './temple/redwind/redwind.component';
import { RedwindpuzzleComponent } from './temple/redwindpuzzle/redwindpuzzle.component';
import { RedflameComponent } from './temple/redflame/redflame.component';
import { PurplepassageComponent } from './temple/purplepassage/purplepassage.component';
import { PurplefireComponent } from './temple/purplefire/purplefire.component';
import { PurplefirepuzzleComponent } from './temple/purplefirepuzzle/purplefirepuzzle.component';
import { PurplesandComponent } from './temple/purplesand/purplesand.component';
import { PurplesandpuzzleComponent } from './temple/purplesandpuzzle/purplesandpuzzle.component';
import { PurplewaterComponent } from './temple/purplewater/purplewater.component';
import { PurplewaterpuzzleComponent } from './temple/purplewaterpuzzle/purplewaterpuzzle.component';
import { PurpleairComponent } from './temple/purpleair/purpleair.component';
import { PurpleairpuzzleComponent } from './temple/purpleairpuzzle/purpleairpuzzle.component';
import { TreasureComponent } from './temple/treasure/treasure.component';
import { YouwinComponent } from './temple/youwin/youwin.component';

@NgModule({
  declarations: [
    AppComponent,
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
    ShedComponent,
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
    LabpotionComponent,
    SpaceroomComponent,
    SpaceroompuzzleComponent,
    ControlcenterComponent,
    NavigationroomComponent,
    Navigationpuzzle1Component,
    Navigationroom2Component,
    Navigationpuzzle2Component,
    Navigationroom3Component,
    Navigationpuzzle3Component,
    NavigationsuccessComponent,
    Dataroom1Component,
    Dataroom2Component,
    Dataroom3Component,
    Datapuzzle1Component,
    Datapuzzle2Component,
    Datapuzzle3Component,
    DatasuccessComponent,
    EngineroomComponent,
    Fixpartpuzzle1Component,
    Fixpartpuzzle2Component,
    Fixpartpuzzle3Component,
    EnginerepairedComponent,
    CaptainsroomComponent,
    HallwayescapepuzzleComponent,
    TempleComponent,
    StaircaseComponent,
    TempleentranceComponent,
    EntrancepuzzleComponent,
    BluebridgeComponent,
    BluebridgepuzzleComponent,
    BluedoorComponent,
    BluedoorpuzzleComponent,
    BlueflameComponent,
    BluepassageComponent,
    RedpassageComponent,
    RedfireComponent,
    RedfirepuzzleComponent,
    RedwindComponent,
    RedwindpuzzleComponent,
    RedflameComponent,
    PurplepassageComponent,
    PurplefireComponent,
    PurplefirepuzzleComponent,
    PurplesandComponent,
    PurplesandpuzzleComponent,
    PurplewaterComponent,
    PurplewaterpuzzleComponent,
    PurpleairComponent,
    PurpleairpuzzleComponent,
    TreasureComponent,
    YouwinComponent,
    HallsComponent
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
