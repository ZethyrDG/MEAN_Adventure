import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-redfirepuzzle',
  templateUrl: './redfirepuzzle.component.html',
  styleUrls: ['./redfirepuzzle.component.css']
})
export class RedfirepuzzleComponent implements OnInit {
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
    this.description = "Three more riddles."
    this.getQuestion()
  }
  getQuestion(){
    if(this.count == 0){
      this.question = "Tool of thief, toy of queen. Always used to be unseen. Sign of joy, sign of sorrow. Giving all likeness borrowed. What am I?"
      this.correct = "mask"
      this.correct2 = "a mask"
    }
    if(this.count == 1){
      this.question = "I am the beginning of the end, and the end of time and space. I am essential to creation, and I surround every place. What am I?"
      this.correct = "e"
      this.correct2 = "letter e"
    }
    if(this.count == 2){
      this.question = "What are moving left to right, right now?"
      this.correct = "eyes"
      this.correct2 = "my eyes"
    }
  }
  onClick(){
    if(this.answer == this.correct || this.answer == this.correct2){
      this.count++;
      if(this.count == 3){
        this.description = "The final answer shuts off the flames as quickly as they appeared. While still hot, the room is safe to cross."
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