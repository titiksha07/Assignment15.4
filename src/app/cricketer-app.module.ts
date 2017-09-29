import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './cricketer-app.component';
import { CricketersListComponent } from './cricketers/cricketers.component';
import { MyHighlighterDirective } from './directive/my-highlighter.directive';
import { CriketerDropDownService } from './services/cricketer-drop-down.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { CricketerComponent } from "./cricketer/cricketer.component";
import { appRouting } from "./routes/cricket-app.routes";
import { CricketerService } from "./services/cricketer.service";
import { CricketerDetailComponent } from './cricketer-detail/cricketer-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NextComponent } from './next/next.component';
import { AnimationComponent } from './pages/animation/animation.component';
import {ResolveService} from './routes/resolve-service'
@NgModule({
  declarations: [
    AppComponent,
    
    CricketersListComponent,
    CricketerComponent,
    MyHighlighterDirective,
    SearchPipe,
    OrderByPipe,
    CricketerDetailComponent,
    PageNotFoundComponent,
    NextComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
 exports:[
BrowserAnimationsModule,
 ],
  providers: [CriketerDropDownService, CricketerService,ResolveService],
  bootstrap: [AppComponent]
})

export class AppModule { }
