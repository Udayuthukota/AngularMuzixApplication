import { HttpClient } from '@angular/common/http';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchData;
  muzix:string;
  constructor(private _searchService: SearchService,private http:HttpClient) { }

  ngOnInit() {
  }
  search(value){
    this.muzix = value;
    this._searchService.getSearch(this.muzix).subscribe((data)=>
    {
      this.searchData = data['results']['trackmatches']['track'];
    });
  }
  getImage(searchData)
  {
    return searchData['image'][2]['#text'];
  }
  save(id,name,comment)
{
this.http.post("http://localhost:8082/api/v1/muzix",
{

  "trackId": id,
  "trackName": name,
  "comment": comment,
})
.subscribe(
data  => {
console.log("POST Request is successful ", data);
},
error  => {

console.log("Error", error);

});
}

}
