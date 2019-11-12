import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BracketResolver } from './bracket/bracket.resolver';
import { BracketComponent } from './bracket/bracket.component';

const routes: Routes = [
  { path: 'bracket', component: BracketComponent, resolve: {bracket: BracketResolver} },
  { path: '', redirectTo: 'bracket', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
