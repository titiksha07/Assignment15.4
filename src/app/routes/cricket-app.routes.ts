import { RouterModule, Routes, CanActivate, CanDeactivate } from '@angular/router';
import { CricketersListComponent } from "./../cricketers/cricketers.component";
import { CricketerComponent } from "./../cricketer/cricketer.component";
import { CricketerDetailComponent } from "./../cricketer-detail/cricketer-detail.component";
import { PageNotFoundComponent } from "./../page-not-found/page-not-found.component";
//import { AuthGuardComponent } from "./../routes/auth-guard";
//import { UnsavedComponent}  from "./../routes/unsaved";
import { AnimationComponent } from './../pages/animation/animation.component';
import { NextComponent } from "./../next/next.component";
import {ResolveService} from './resolve-service';
const routes: Routes = [
  { path: '', redirectTo: '/cricketer', pathMatch: 'full' },
  {path:'login', component:NextComponent},
  { path: 'cricketer', 
    component: CricketerComponent,
    data:{
      message:"Add a Cricketer"
    },
    resolve:{
      playerType:ResolveService
    }
    },
  { path: 'cricketersList', component: CricketersListComponent },
  { path: 'cricketerDetail/:id', component: CricketerDetailComponent },
   { path: 'animation', component: AnimationComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRouting = RouterModule.forRoot(routes);