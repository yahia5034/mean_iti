import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
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
