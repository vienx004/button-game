import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  solutionArray: number[] = [1,2,3,4]
  patternArray: number[] = []
  check1: boolean
  check2: boolean
  check3: boolean
  check4: boolean

  //When page is entered, reset the solution array
  ionViewDidLoad(){
    this.randomizeArray(this.solutionArray);
    console.log("Solution Reset!")
    this.check1 = false
    this.check2 = false
    this.check3 = false
    this.check4 = false
  }

  //add value when 1st button is clicked
  onClick1(num: number){
    console.log("Clicked on " + num);
    this.patternArray.push((+num))
    this.check1 = this.check2ArraysProgress(this.patternArray, this.solutionArray);
  }

  //method tied to event handler to let user check if pattern is correct
 onCheck(){
    if(this.check2Arrays(this.patternArray, this.solutionArray) == true){
      console.log("Correct!");
      console.log(this.patternArray);
      console.log(this.solutionArray);
      //this.randomizeArray(this.solutionArray);
    } else
      console.log("Incorrect!");
      console.log("pattern " + this.patternArray);
      console.log("solution " + this.solutionArray);
      this.onPatternReset();
  }

 //method tied to event handler to reset both pattern and solution array
 onReset(){
   console.log("Reset!");
   this.onPatternReset();
   this.randomizeArray(this.solutionArray);
 }

  //method to set inputted pattern array to empty
  onPatternReset(){
    this.patternArray = [];
  }

  //method to check 2 arrays
  check2Arrays(pattern: number[], solution: number[]){
    if(pattern.length !== solution.length){
      return false;
    }
    for(let i = 0; i < 3; i++){
      if(pattern[i] !== solution[i]){
        return false;
      }
      return true;
    }
  }

  //if patternArray[index] == solutionArray[index] return true 
  check2ArraysProgress(pattern, solution){
      for(let i=0; i < pattern.length; i++){
        if(pattern[i] == solution[i]) {
          return true;
        }
          return false;
      }
  }
  
  //randomize solution array using Fisher-Yates shuffle
  randomizeArray(solution: number[]){
    for(let i = solution.length - 1; i > 0; i--){
      let j = Math.floor(Math.random() * (i+1))
      let temp = solution[i]
      solution[i] = solution[j]
      solution[j] = temp
    }
  }

}
