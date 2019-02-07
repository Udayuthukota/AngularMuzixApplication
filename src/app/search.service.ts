import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { myService } from './search';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url;
  url2;
  url1="http://localhost:8082/api/v1/muzix";
  constructor(private http: HttpClient) { }

  getSearch(val:string){
    this.url = "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" +val+"&api_key=32e5e8719e5f77dc5996a922f7707373&format=json";
    return this.http.get(this.url);
  }

  getAllServive(){
    return this.http.get(this.url1);
  }

  deleteService(val:string)
  {
    this.url1=this.url1+'/'+val;
    return this.http.delete(this.url1);
  }
  updateService(id,trackName){
    this.url2 = "http://localhost:8082/api/v1/muzix/";
    return this.http.put(this.url2+id,
    {
    "comment":trackName
    });
    }
}
