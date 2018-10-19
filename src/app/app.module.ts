import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BestLineupComponent } from './best-lineup/best-lineup.component';
import { PlayersService } from './players.service';


@NgModule({
  declarations: [
    AppComponent,
    BestLineupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
