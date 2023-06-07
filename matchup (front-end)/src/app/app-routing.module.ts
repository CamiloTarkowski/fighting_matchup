import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatchupComponent } from './matchup/matchup.component';
import { MatchupsComponent } from './matchups/matchups.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'juegos',
    component: GamesComponent,
  },
  {
    path: 'juego/:id',
    component: GameComponent,
  },
  {
    path: 'contacto',
    component: ContactComponent,
  },
  {
    path: 'inicia-sesion',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: SignUpComponent,
  },
  {
    path: 'matchup/:id',
    component: MatchupComponent,
  },
  {
    path: 'matchups',
    component: MatchupsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
