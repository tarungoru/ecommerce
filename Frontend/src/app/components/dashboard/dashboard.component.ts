import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  
  currentState:String = 'order-list';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentState = this.router.url;
  }

  setCurrentState(state:string) {
    this.currentState = state;
  }

}
