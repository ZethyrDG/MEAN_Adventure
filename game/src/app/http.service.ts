import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  user ={
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
      
      mainroom: false,
      gotwand: false,
      lab: false,
      labpuzzle1: false,
      labpuzzle2: false,
      labpuzzle3: false,
      dungeon: false,
      savedthewizard: false,
      castledone: false,
      spacedone: false,
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
}
