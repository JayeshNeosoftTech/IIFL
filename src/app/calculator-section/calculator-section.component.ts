import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-section',
  templateUrl: './calculator-section.component.html',
  styleUrls: ['./calculator-section.component.scss']
})
export class CalculatorSectionComponent {
  progress = '40%';
  data:any;

  private updateSliderToggle: boolean = false;

  percentage = 40;
  loanvalue = this.percentage * 25000;

  loanselect_val=false;
  loan_li= [{imgurl:'../../assets/images/icons/home-icon.svg', options:'Home Loan'},
            {imgurl:'../../assets/images/icons/home-icon.svg', options:'Personal Loan'}
          ];


  startUpdateSlider(data:any) {
    this.updateSliderToggle = true;
  }

  endUpdateSlider(data:any) {
    this.updateSliderToggle = false;
  }

  updateSlider(event:any, data:any) {
    if (this.updateSliderToggle) {
      this.loanvalue = 0;
      this.percentage = Math.floor(
        (event.layerX / (event.target.offsetWidth - 3)) * 100
      );

      if (this.percentage > 100) {
        this.percentage = 100;
      } 
      else if (this.percentage <= 0){
        this.percentage = 0;
      }
      this.progress = this.percentage + '%';
      this.loanvalue = this.percentage * 25000;
      console.log(this.loanvalue);
    }
  }

  decreaseLoan(){
    if(this.loanvalue <= 200000){
      this.loanvalue= 200000;
      this.percentage= 0;
      this.progress = this.percentage + '%'; 
    }
    else{
      this.loanvalue= this.loanvalue - 100000;
      this.percentage= (this.loanvalue * 100)/2500000;
      this.progress = this.percentage + '%'; 
    }
  }
  increaseLoan(){
    if(this.loanvalue >= 2500000){
      this.loanvalue= 2500000;
      this.percentage= (this.loanvalue * 100)/2500000;
      this.progress = this.percentage + '%'; 
    }
    else{
      this.loanvalue= this.loanvalue + 100000;
      this.percentage= (this.loanvalue * 100)/2500000;
      this.progress = this.percentage + '%'; 
    }
  }

  /* ul show and hide functionality */
  imgpath='../../assets/images/icons/home-icon.svg';
  selectedfield='Home Loan';
  
  ulshowhide(){
    if(this.loanselect_val==true){
      this.loanselect_val=false;
    }
    else{
      this.loanselect_val=true;
    }
  }

  clicked(index:any){
    console.log(this.loan_li[index]);
    this.imgpath=this.loan_li[index].imgurl;
    this.selectedfield= this.loan_li[index].options;
  }
}
