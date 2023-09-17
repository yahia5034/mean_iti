import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { GamesComponent } from './games/games.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

const routes_routerSection=[
  {path:'electronics',component:ElectronicsComponent},
  {path:'home',component:HomeComponent},
  {path:'games',component:GamesComponent},
  {path:'game/:gameId/:gameName',component:GameComponent},
]
const routes_forms = [
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ElectronicsComponent,
    GameComponent,
    GamesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes_routerSection),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 