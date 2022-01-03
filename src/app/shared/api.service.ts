import { HttpClient } from '@angular/common/http';

import { identifierName } from '@angular/compiler';

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  postRestaurant(data: any) {
    return this._http.post<any>("http://localhost:3000/posts/", data).pipe(map((res: any) => {
      return res;
    }))
  }
  getRestaurant(data: any, id: number) {
    return this._http.get<any>("http://localhost:3000/posts/").pipe(map((res: any) => {
      return res;
    }))
  }
  deleteRestaurant(id: number) {
    return this._http.delete<any>("http://localhost:3000/posts/" + id).pipe(map((res: any) => {
      return res;
    }))


  }

  updateRestaurant(id :number) {
    return this._http.put<any>("http://localhost:3000/posts/",+ id).pipe(map((res: any )=> {
       return res;

    }))
  }
}
