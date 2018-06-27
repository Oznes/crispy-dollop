import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  teamA: number;
  teamB: number;

  constructor(public navCtrl: NavController) {
    this.teamA= 0;
    this.teamB = 0;
  }
  onReset(){
    this.teamA=0;
    this.teamB=0;

  }

  //FREE THROW
  onFreeB(){
    this.teamB += 1;
  }
  onFreeA(){
    this.teamA += 1;
  }

    //ON THREE
  onThreeB(){
    this.teamB += 3;
  }
  onThreeA(){
    this.teamA += 3;
  }

  //ON TWO
  onTwoB(){
    this.teamB += 2;
  }
  
  onTwoA(){
    this.teamA += 2;
  }

}
