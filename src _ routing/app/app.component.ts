import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sec2';
  students=["Ahmed","Ali","Mohammed"];
  games=[{
    id:1,
    name:"Resident Evil"
  },
  {
    id: 2,
    name: "Alohaa"
  },
  {
    id: 3,
    name: "Call Of Duty"
  },
];
}
