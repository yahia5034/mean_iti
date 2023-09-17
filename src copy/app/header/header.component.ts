import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  Show(){
    this.notifyParent.emit('emit');
  }
}
