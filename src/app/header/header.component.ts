import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navigationButtons = [
    {
      title: "home",
      icon: "home",
      destination: ""
    },
    {
      title: "about",
      icon: "home",
      destination: ""
    }
  ]
  

  constructor() { }

  ngOnInit() {
  }

}