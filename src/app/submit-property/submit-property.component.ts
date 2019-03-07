import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-submit-property',
  templateUrl: './submit-property.component.html',
  styleUrls: ['./submit-property.component.css']
})
export class SubmitPropertyComponent implements OnInit {
  owner:boolean=false;
  agent:boolean=false;
  builder:boolean=false;

  constructor() { 
   
  }

  ngOnInit() {
      
  }

  setIam(user){
    if(user=='owner'){
      this.owner=true;
      this.agent=false;
      this.builder=false;
    }
    else if(user=='agent'){
      this.owner=false;
      this.agent=true;
      this.builder=false;
    }
    else {//builder
      this.owner=false;
      this.agent=false;
      this.builder=true;
    }
  }

}
