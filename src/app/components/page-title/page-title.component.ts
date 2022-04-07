import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() page = ''; // decorate the property with @Input()

}
