import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  id;
  name;
  constructor(private aR:ActivatedRoute){
    this.id=this.aR.snapshot.params['gameId'],
    this.name=this.aR.snapshot.params['gameName'],
    this.aR.params.subscribe(
      (pars) =>
      {
        this.id = pars['gameId'],
        this.name = pars['gameName']
      }
    )
  }
  games=[
    {
      id: 1,
      name:"Resident Evil"
    },
    {
      id: 2,
      name: "Alohaa"
    },
    {
      id: 3,
      name: "Call Of Duty"
    }
  ];
}
