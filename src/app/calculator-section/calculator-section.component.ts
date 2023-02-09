import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-section',
  templateUrl: './calculator-section.component.html',
  styleUrls: ['./calculator-section.component.scss']
})
export class CalculatorSectionComponent {
  loan_value=1000000;

  /* progressbar */
  data:any;
  progress: any;
  private updateSliderToggle: boolean = false;

  startUpdateSlider(data:any) {
    this.updateSliderToggle = true;
  }

  endUpdateSlider(data:any) {
    this.updateSliderToggle = false;
  }

  updateSlider(event:any, data:any) {
    if (this.updateSliderToggle) {
      let percentage: number = Math.floor(
        (event.layerX / (event.target.offsetWidth - 3)) * 100
      );

      if (percentage > 100) {
        percentage = 100;
      } else if (percentage < 0) {
        percentage = 0;
      }
      this.progress = percentage + '%';
    }
  }
}
