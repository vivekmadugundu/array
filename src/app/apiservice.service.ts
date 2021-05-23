import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { 
    
  }

  getserverdata(){
    return this.http.get('./assets/json/headerdata.json')
  }


}
