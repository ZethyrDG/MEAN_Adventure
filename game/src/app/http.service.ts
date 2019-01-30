import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  user ={
    username: "",
    location: "",
    progress:{
      frontroom:false,
      myBedroom:false,
      parlor: false,
      shed:false,
      knight:false,
      translate:false,

      navigation:false,
      engine: false,
      data: false,
      savedAlien: false,
      spacedone: false,
      
      mainroom: false,
      gotwand: false,
      lab: false,
      labpuzzle1: false,
      labpuzzle2: false,
      labpuzzle3: false,
      dungeon: false,
      savedthewizard: false,
      castledone: false,
      dungeonfail: false,

      blueflame: false,
      redflame: false,
    },
    inventory:{
      hook:false,
      ladder:false,
      basementkey: false,
      shedkey: false,
      aliendevice:false,
      
      fixedpart1:false,
      fixedpart2:false,
      fixedpart3:false,

      wand: false,
      potion: false,
      spellbook: false,

      blueflame: false,
      redflame: false,
    }
  };
  constructor(private _http: HttpClient) { }
  getOne(user){
    return this._http.get(`/api/players/${user}`)
  }
  update(obj){
    return this._http.put(`/api/players/${obj._id}`, obj)
  }
  getCountry(region){
    return this._http.get('https://restcountries.eu/rest/v2/region/'+ region)
  }
  getOneCountry(code){
    return this._http.get('https://restcountries.eu/rest/v2/alpha/'+code)
  }
  getQ(level, category){
    return this._http.get(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${level}&type=multiple`)
  }
    getEasyMath(){
    return this._http.get('https://opentdb.com/api.php?amount=1&category=19&difficulty=easy&type=multiple')
  }
  getMediumMath(){
    return this._http.get('https://opentdb.com/api.php?amount=1&category=19&difficulty=medium&type=multiple')
  }
  getEasyMyth(){
    return this._http.get('https://opentdb.com/api.php?amount=1&category=20&difficulty=easy&type=multiple')
  }
  getMediumMyth(){
    return this._http.get('https://opentdb.com/api.php?amount=1&category=20&difficulty=medium&type=multiple')
  }
  getEasyScience(){
    return this._http.get('https://opentdb.com/api.php?amount=1&category=17&difficulty=easy&type=multiple')
  }
  getMediumScience(){
    return this._http.get('https://opentdb.com/api.php?amount=1&category=17&difficulty=medium&type=multiple')
  }
  getEasyHistory(){
    return this._http.get('https://opentdb.com/api.php?amount=1&category=23&difficulty=easy&type=multiple')
  }
  getMediumHistory(){
    return this._http.get('https://opentdb.com/api.php?amount=1&category=23&difficulty=medium&type=multiple')
  }
}
