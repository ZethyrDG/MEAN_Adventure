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
    {path: 'tower', component: TowerComponent },
    { path: 'towerpuzzle', component: TowerpuzzleComponent },
    { path: 'mainroom', component: MainroomComponent },
    { path: 'hallway', component: HallwayComponent },
    { path: 'hallwaypuzzle', component: HallwaypuzzleComponent },
    { path: 'hallwaysecret', component: HallwaysecretComponent },
    { path: 'hallwayescape', component: HallwayescapeComponent },
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
    
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
