import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  getName:string;
  @Input()
  getId:string;
  @Input()
  getImage1:string;
  @Input()
  getArtist1:string;
  
  constructor() { }

  ngOnInit() {
  }

}
