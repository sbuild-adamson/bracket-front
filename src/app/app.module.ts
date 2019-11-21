import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BracketAppComponent } from './bracket-app.component';
import { BracketHeaderComponent } from './nav/bracket-header.component';
import { BracketComponent, RoundsComponent, BracketResolver, BracketService, MatchupComponent } from './bracket';



@NgModule({
  declarations: [
    BracketAppComponent,
    BracketHeaderComponent,
    BracketComponent,
    RoundsComponent,
    MatchupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BracketResolver,
    BracketService
  ],
  bootstrap: [BracketAppComponent]
})
export class AppModule { }
