import { Component, OnInit, OnDestroy } from '@angular/core';
import { AllServiceService } from '../services/all-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  public UserIsAuthenticated:boolean = false;
  constructor(private service: AllServiceService) { }

  ngOnInit() {
    this.service.getIsAuthenticated().subscribe(data=>{
      this.UserIsAuthenticated = data;
    });
    if(this.service.getAuthStatus()){
      this.UserIsAuthenticated = true;
    }
  }

onLogout(){
  this.service.logout();
}

}
