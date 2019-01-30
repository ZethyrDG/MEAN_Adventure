import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-labcombinepuzzle',
  templateUrl: './labcombinepuzzle.component.html',
  styleUrls: ['./labcombinepuzzle.component.css']
})
export class LabcombinepuzzleComponent implements OnInit {
  description: String;
  question;
  answers;
  correct;
  count = 0;
  switch: Boolean = true;
  switch1: Boolean = false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "In order to follow this recipe, you're going to have to follow some complex calculations. You should make sure to get this right!"
    this.getQuestion()
  }
  shuffle(arr){
    var x = arr.length-1
    var temp
    while (x != 0){
        var y = Math.floor(Math.random() * x);
        temp = arr[y];
        arr[y] = arr[x];
        arr[x] = temp;
        x--;
    }
  }
  getQuestion(){
    if(this.count == 0){
      this.question = "1/2 + 3/2"
      this.answers = [2, 5, 4, 3, 0]
      this.correct = 2
    }
    if(this.count == 1){
      this.question = "(1/2) / (1/6)"
      this.answers = [3, 5, 1, 10, 6]
      this.correct = 3
    }
    if(this.count == 2){
      this.question = "(2/5) - (7/5)"
      this.answers = [5, 4, -1, 0, 1]
      this.correct = -1
    }
    if(this.count == 3){
      this.question = "(1/3) * ((7/6) - (1/5))"
      this.answers = ["61/152", "1/63", "29/90", "1 + (1/24)", "-(3/16)"]
      this.correct = "29/90"
    }
  }
  onClick(index){
    if(this.answers[index] == this.correct){
      this.count++;
      if(this.count == 4){
        this.description = "That should be everything! You've worked out everything you need to brew the potion and, after a few minutes of putting it all together, it definitely looks ready."
        this.switch1 = true;
        this.switch = false;
      }
      else{
        if(this.count == 1){
          this.description = "That seems right. The next step in the recipe reads as follows:"
          this.getQuestion();
        }
        if(this.count == 2){
          this.description = "You're pretty sure you got that one. The third step looks a little more complex:"
          this.getQuestion();
        }
        if(this.count == 3){
          this.description = "The final step, this one looks challenging!"
          this.getQuestion();
        }
      }
    }
    else{
      this.description = "Hmm, that doesn't seem right. Maybe you should rethink that one?"
    }
  }
}