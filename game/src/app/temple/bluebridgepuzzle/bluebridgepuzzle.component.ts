import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-bluebridgepuzzle',
  templateUrl: './bluebridgepuzzle.component.html',
  styleUrls: ['./bluebridgepuzzle.component.css']
})
export class BluebridgepuzzleComponent implements OnInit {
  description: String;
  question;
  answer = ""
  correct;
  correct2;
  count = 0;
  switch: Boolean = true;
  switch1: Boolean = false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "The stone has three riddles on it. You hear a voice, and it asks you to speak the answers to three riddles. The first one reads:"
    this.getQuestion()
  }
  getQuestion(){
    if(this.count == 0){
      this.question = "Poor people have it. Rich people need it. If you eat it you die. what is it?"
      this.correct = "nothing"
      this.correct2 = "Nothing"
    }
    if(this.count == 1){
      this.question = "You have me today, tomorrow you'll have more; As your time passes, I'm not easy to store; I don't take up space, but I'm only in one place; I am what you saw, but not what you see. What am I?"
      this.correct = "memory"
      this.correct2 = "memories"
    }
    if(this.count == 2){
      this.question = "What runs around the whole yard without moving?"
      this.correct = "fence"
      this.correct2 = "a fence"
    }
  }
  onClick(){
    if(this.answer == this.correct || this.answer == this.correct2){
      this.count++;
      if(this.count == 3){
        this.description = "As you speak the final answer, the pieces of the bridge raise from the water, and reform a path to the halls."
        this.switch1 = true;
        this.switch = false;
      }
      else{
        if(this.count == 1){
          this.description = "'Correct', the voice answers."
          this.getQuestion();
          this.answer = ""
        }
        if(this.count == 2){
          this.description = "'Correct', the voice answers again"
          this.getQuestion();
          this.answer = ""
        }
      }
    }
    else{
      this.description = "'Incorrect'"
    }
  }
}