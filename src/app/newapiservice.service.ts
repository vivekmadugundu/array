import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewapiserviceService {

  constructor(private http:HttpClient) { }

serverdata(){
 return this.http.get('./assets/json/childdata.json')
}

}
