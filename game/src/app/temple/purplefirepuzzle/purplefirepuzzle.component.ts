import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-purplefirepuzzle',
  templateUrl: './purplefirepuzzle.component.html',
  styleUrls: ['./purplefirepuzzle.component.css']
})
export class PurplefirepuzzleComponent implements OnInit {
  description: String;
  question;
  answer = ""
  correct;
  correct2;
  switch: Boolean = true;
  switch1: Boolean = false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "You see a riddle start to form..."
    this.getQuestion()
  }
  getQuestion(){
      this.question = "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?"
      this.correct = "fire"
      this.correct2 = "flame"
  }
  onClick(){
    if(this.answer == this.correct || this.answer == this.correct2){
        this.description = "The flame slowly fades, and the pass across is safe."
        this.switch1 = true;
        this.switch = false;
    }
    else{
      this.description = "Nothing happens."
    }
  }
}