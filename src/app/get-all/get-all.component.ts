import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {
  tracks:any;
 
  trackId;
  trackName;
  constructor(private servive:SearchService) { }

  ngOnInit() {
    this.servive.getAllServive().subscribe((response)=>this.tracks=response)
  }

  getall(){
    this.servive.getAllServive().subscribe((response)=>this.tracks=response)
  }
  deleteService(val){
    this.servive.deleteService(val).subscribe((data)=>{console.log('deletedSuccessfully')})

  }
   updateService(find,track){
     this.trackId = track.trackId;
   console.log(this.trackId);
     this.trackName = find;
     console.log(this.trackName);
     this.servive.updateService(this.trackId,this.trackName).subscribe((data)=>{
     console.log("success");
     })
    }

}
