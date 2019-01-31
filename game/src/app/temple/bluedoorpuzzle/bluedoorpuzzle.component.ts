import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-bluedoorpuzzle',
  templateUrl: './bluedoorpuzzle.component.html',
  styleUrls: ['./bluedoorpuzzle.component.css']
})
export class BluedoorpuzzleComponent implements OnInit {
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
    this.description = "It's a riddle. You'll have to solve it."
    this.getQuestion()
  }
  getQuestion(){
    if(this.count == 0){
      this.question = "Re-arrange the letters, O O U S W T D N E J R to spell just one word."
      this.correct = "just one word"
      this.correct2 = "justoneword"
    }
    if(this.count == 1){
      this.question = "What has six faces, But does not wear makeup. It also has twenty-one eyes, But cannot see?"
      this.correct = "die"
      this.correct2 = "dice"
    }
    if(this.count == 2){
      this.question = "Before Mount Everest was discovered, what was the highest mountain on Earth?"
      this.correct = "mount everest"
      this.correct2 = "Mount Everest"
    }
  }
  onClick(){
    if(this.answer == this.correct || this.answer == this.correct2){
      this.count++;
      if(this.count == 3){
        this.description = "The final riddle fades, and the door starts to open."
        this.switch1 = true;
        this.switch = false;
      }
      else{
        if(this.count == 1){
          this.description = "Another riddle appears."
          this.getQuestion();
          this.answer = ""
        }
        if(this.count == 2){
          this.description = "Yet another riddle, your torch won't last forever..."
          this.getQuestion();
          this.answer = ""
        }
      }
    }
    else{
      this.description = "Nothing happens."
    }
  }
}