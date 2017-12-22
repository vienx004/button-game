export class ArraysService {
    solutionArray: number[] = [1,2,3,4]
    patternArray: number[] = []

 
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