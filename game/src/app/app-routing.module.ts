import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  { path: 'house', component:  HouseComponent, children: [
    { path: 'frontroom', component: FrontRoomComponent},
    { path: 'garage', component: GarageComponent},
    { path: 'kitchen', component: KitchenComponent},
    { path: 'library', component: LibraryComponent},
    { path: 'bathroom', component: BathroomComponent},
    { path: 'basement', component: BasementComponent},
    { path: 'parlor', component: ParlorComponent},
    { path: 'masterbedroom', component: MasterBedroomComponent},
    { path: 'mybedroom', component: MyBedroomComponent},
    { path: 'upstairslanding', component: UpstairsLandingComponent},
    { path: 'attic', component: AtticComponent},
    { path: 'backyard', component: BackyardComponent},
    { path: 'shed', component: ShedComponent},
  ] },
  { path: 'castle', component: CastleComponent, children: [
    { path: 'tower', component: TowerComponent },
    { path: 'towerpuzzle', component: TowerpuzzleComponent },
    { path: 'mainroom', component: MainroomComponent },
    { path: 'hallway', component: HallwayComponent },
    { path: 'hallwaypuzzle', component: HallwaypuzzleComponent },
    { path: 'hallwaysecret', component: HallwaysecretComponent },
    { path: 'hallwayescape', component: HallwayescapeComponent },
    { path: 'hallwayescapepuzzle', component: HallwayescapepuzzleComponent },
    { path: 'hallwayduel', component: HallwayduelComponent },
    { path: 'hallwaywand', component: HallwaywandComponent },
    { path: 'dungeonroom1', component: Dungeonroom1Component },
    { path: 'dungeonroom1puzzle', component: Dungeonroom1puzzleComponent },
    { path: 'dungeonroom2', component: Dungeonroom2Component },
    { path: 'dungeonroom2puzzle', component: Dungeonroom2puzzleComponent },
    { path: 'dungeonroom3', component: Dungeonroom3Component },
    { path: 'dungeonroom3puzzle', component: Dungeonroom3puzzleComponent },
    { path: 'dungeonspellbook', component: DungeonspellbookComponent },
    { path: 'lab', component: LabComponent },
    { path: 'lablockpuzzle', component: LablockpuzzleComponent },
    { path: 'labguardianpuzzle', component: LabguardianpuzzleComponent },
    { path: 'labbookpuzzle', component: LabbookpuzzleComponent },
    { path: 'labcombinepuzzle', component: LabcombinepuzzleComponent },
    { path: 'labpotion', component: LabpotionComponent },
  ] },
  { path: 'space', component: SpaceComponent, children: [
    { path: 'spaceroom', component: SpaceroomComponent },
    { path: 'spaceroompuzzle', component: SpaceroompuzzleComponent },
    { path: 'controlcenter', component: ControlcenterComponent },
    { path: 'navigationroom', component: NavigationroomComponent },
    { path: 'navigationpuzzle1', component: Navigationpuzzle1Component },
    { path: 'navigationroom2', component: Navigationroom2Component },
    { path: 'navigationpuzzle2', component: Navigationpuzzle2Component },
    { path: 'navigationroom3', component: Navigationroom3Component },
    { path: 'navigationpuzzle3', component: Navigationpuzzle3Component },
    { path: 'navigationsuccess', component: NavigationsuccessComponent },
    { path: 'dataroom1', component: Dataroom1Component },
    { path: 'dataroom2', component: Dataroom2Component },
    { path: 'dataroom3', component: Dataroom3Component },
    { path: 'datapuzzle1', component: Datapuzzle1Component },
    { path: 'datapuzzle2', component: Datapuzzle2Component },
    { path: 'datapuzzle3', component: Datapuzzle3Component },
    { path: 'datasuccess', component: DatasuccessComponent },
    { path: 'engineroom', component: EngineroomComponent },
    { path: 'fixpartpuzzle1', component: Fixpartpuzzle1Component },
    { path: 'fixpartpuzzle2', component: Fixpartpuzzle2Component },
    { path: 'fixpartpuzzle3', component: Fixpartpuzzle3Component },
    { path: 'enginerepaired', component: EnginerepairedComponent },
    { path: 'captainsroom', component: CaptainsroomComponent },
  ] },
  { path: 'temple', component: TempleComponent, children: [
    { path: 'staircase', component: StaircaseComponent},
    { path: 'entrance', component: TempleentranceComponent},
    { path: 'entrancepuzzle', component: EntrancepuzzleComponent},
    { path: 'halls', component: HallsComponent},
    { path: 'bluepassage', component: BluepassageComponent},
    { path: 'bluebridge', component: BluebridgeComponent},
    { path: 'bluebridgepuzzle', component: BluebridgepuzzleComponent},
    { path: 'bluedoor', component: BluedoorComponent},
    { path: 'bluedoorpuzzle', component: BluedoorpuzzleComponent},
    { path: 'blueflame', component: BlueflameComponent},
    { path: 'redpassage', component: RedpassageComponent},
    { path: 'redfire', component: RedfireComponent},
    { path: 'redfirepuzzle', component: RedfirepuzzleComponent},
    { path: 'redwind', component: RedwindComponent},
    { path: 'redwindpuzzle', component: RedwindpuzzleComponent},
    { path: 'redflame', component: RedflameComponent},
    { path: 'purplepassage', component: PurplepassageComponent},
    { path: 'purplefire', component: PurplefireComponent},
    { path: 'purplefirepuzzle', component: PurplefirepuzzleComponent},
    { path: 'purplesand', component: PurplesandComponent},
    { path: 'purplesandpuzzle', component: PurplesandpuzzleComponent},
    { path: 'purplewater', component: PurplewaterComponent},
    { path: 'purplewaterpuzzle', component: PurplewaterpuzzleComponent},
    { path: 'purpleair', component: PurpleairComponent},
    { path: 'purpleairpuzzle', component: PurpleairpuzzleComponent},
    { path: 'treasure', component: TreasureComponent},
    { path: 'youwin', component: YouwinComponent},
  ] },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
