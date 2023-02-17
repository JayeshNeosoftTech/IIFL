import { Component } from '@angular/core';

@Component({
  selector: 'app-offering-sec',
  templateUrl: './offering-sec.component.html',
  styleUrls: ['./offering-sec.component.scss']
})
export class OfferingSecComponent {
  offeringSlider=[{title:'Build your dreams', heading:'Home Loans Upto 85%', bgimg:'homeloan-bg.svg'},
                  {title:'Business loans', heading:'₹50 lakhs Credit facility', bgimg:'businessloan-bg.svg'},
                  {title:'Personal Funds', heading:'Personal Loans', bgimg:'personalfunds-bg.svg'},
                  {title:'Business loans', heading:'₹50 lakhs Credit facility', bgimg:'businessloan-bg.svg'}
                  ]
}
