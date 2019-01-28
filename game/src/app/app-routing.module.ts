import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HouseComponent } from './house/house.component';
import { CastleComponent } from './castle/castle.component';
import { SpaceComponent } from './space/space.component';

const routes: Routes = [
  { path: 'main', component: MainComponent, children: [
    { path: 'house/', component:  HouseComponent, children: [
      
    ] },
    { path: 'castle/', component: CastleComponent, children: [
      
    ] },
    { path: 'space/', component: SpaceComponent, children: [
      
    ] }]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
