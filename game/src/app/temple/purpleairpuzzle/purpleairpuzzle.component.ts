import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-purpleairpuzzle',
  templateUrl: './purpleairpuzzle.component.html',
  styleUrls: ['./purpleairpuzzle.component.css']
})
export class PurpleairpuzzleComponent implements OnInit {
  description: String;
  question;
  answer = ""
  correct;
  correct2;
  switch: Boolean = true;
  switch1: Boolean = false;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.description = "You see a riddle start to form on the door..."
    this.getQuestion()
  }
  getQuestion(){
      this.question = "Voiceless it cries, wingless flutters, toothless bites, mouthless mutters."
      this.correct = "wind"
      this.correct2 = "the wind"
  }
  onClick(){
    if(this.answer == this.correct || this.answer == this.correct2){
        this.description = "The air reverses, and starts to return to the room. You feel much better."
        this.switch1 = true;
        this.switch = false;
    }
    else{
      this.description = "Nothing happens."
    }
  }
}