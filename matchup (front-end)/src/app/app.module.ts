import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { FooterComponent } from './footer/footer.component';
import { GameComponent } from './game/game.component';
import { GamesComponent } from './games/games.component';
import { MatchupsComponent } from './matchups/matchups.component';
import { MatchupComponent } from './matchup/matchup.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigatorComponent,
    FooterComponent,
    GameComponent,
    GamesComponent,
    MatchupsComponent,
    MatchupComponent,
    ContactComponent,
    LoginComponent,
    SignUpComponent,
    CharactersComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
