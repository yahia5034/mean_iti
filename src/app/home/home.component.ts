import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mainDescription = 'Unlimited movies, TV shows, and more';
  pricePlans = 'Plans now start at EGP70/month';
  subDescription =
    'Ready to watch? Enter your email to create or restart your membership';
  constructor() {}
}
