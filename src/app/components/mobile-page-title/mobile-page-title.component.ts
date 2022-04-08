import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-page-title',
  templateUrl: './mobile-page-title.component.html',
  styleUrls: ['./mobile-page-title.component.scss']
})
export class MobilePageTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() header = "";
}
