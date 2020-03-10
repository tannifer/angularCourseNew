import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }


// declare properties

dataUrl = 'http://jsonplaceholder.typicode.com/users';

getData() {
  return this.http.get(this.dataUrl);
}

retrieveSingleUser(param){
  return this.http.get(`${this.dataUrl}/${param}`);
}

}