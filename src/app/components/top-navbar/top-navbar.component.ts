import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleClass = true;
  toggleMenu() {
    this.toggleClass = !this.toggleClass;
  }
  @Input() pageHeader = "";

}
