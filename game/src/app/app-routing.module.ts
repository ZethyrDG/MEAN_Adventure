import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    
  ] },
  { path: 'space', component: SpaceComponent, children: [
    
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
