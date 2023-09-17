import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day5';
  show = true;
  setShow(_$event: any){
    this.show = !this.show;
  }
}
