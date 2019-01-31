import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-redwindpuzzle',
  templateUrl: './redwindpuzzle.component.html',
  styleUrls: ['./redwindpuzzle.component.css']
})
export class RedwindpuzzleComponent implements OnInit {
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
    this.description = "Once again, the voice rings out. 'Speak the answers to pass.'"
    this.getQuestion()
  }
  getQuestion(){
    if(this.count == 0){
      this.question = "I'm white, and used for cutting and grinding. When I'm damaged, humans usually remove me or fill me. For most animals I am a useful tool. What am I?"
      this.correct = "tooth"
      this.correct2 = "a tooth"
    }
    if(this.count == 1){
      this.question = "You use a knife to slice my head and weep beside me when I am dead. What am I?"
      this.correct = "onion"
      this.correct2 = "an onion"
    }
    if(this.count == 2){
      this.question = "If you have me, you want to share me. If you share me, you haven't got me. What am I?"
      this.correct = "secret"
      this.correct2 = "a secret"
    }
  }
  onClick(){
    if(this.answer == this.correct || this.answer == this.correct2){
      this.count++;
      if(this.count == 3){
        this.description = "Upon giving the final answer, the wind stops, and your path to the next room is safe."
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