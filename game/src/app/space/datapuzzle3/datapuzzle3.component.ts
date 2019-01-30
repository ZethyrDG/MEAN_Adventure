import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datapuzzle3',
  templateUrl: './datapuzzle3.component.html',
  styleUrls: ['./datapuzzle3.component.css']
})
export class Datapuzzle3Component implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router) { }
  description: String;
  countries: any;
  correctCountry:any = {
    flag:""
  }
  codes=['kr', 'kh', 'np', 'ae', 'id']
  ind: any;
  ngOnInit() {
    this.ind = Math.floor(Math.random() * Math.floor(5));
    this.getOneCountry(this.codes[this.ind])
    this.description="A note from the captain reads, 'Oops, I did it again. Here are some from Asia'"
  }
  getOneCountry(code){
    let obs = this._httpService.getOneCountry(code);
    obs.subscribe(data => {
      console.log(data)
      this.correctCountry = data;
    })
  }
  param(num){
    if(num == this.ind){
      this._router.navigate(['/space/datasuccess'])
    }
    else{
      this.description = "Sorry wrong answer, try again"
    }
  }
}
