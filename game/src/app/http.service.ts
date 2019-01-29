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

    },
    inventory:{
      hook:false,
      ladder:false,
      basementkey: false,
      shedkey: false,
      aliendevice:true
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
