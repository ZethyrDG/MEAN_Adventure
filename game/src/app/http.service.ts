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

      mainroom: false,
      gotwand: false,
      lab: false,
      labpuzzle1: false,
      labpuzzle2: false,
      labpuzzle3: false,
      dungeon: false,
      savedthewizard: false,
    },
    inventory:{
      hook:false,
      ladder:false,
      basementkey: false,
      shedkey: false,
      aliendevice:true,

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
}
