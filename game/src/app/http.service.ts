import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  user;
  constructor(private _http: HttpClient) { }
  getOne(user){
    return this._http.get(`/api/players/${user}`)
  }
  update(obj){
    return this._http.put(`/api/players/${obj._id}`, obj)
  }
}
