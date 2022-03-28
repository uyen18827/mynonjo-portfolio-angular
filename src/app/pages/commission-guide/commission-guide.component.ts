import { Component, NgModule, OnInit } from '@angular/core';
import SwiperCore, { Swiper, SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
@Component({
  selector: 'app-commission-guide',
  templateUrl: './commission-guide.component.html',
  styleUrls: ['./commission-guide.component.scss']
})

export class CommissionGuideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //  swiper = new Swiper(".mySwiper", {
  //   slidesPerView: "auto",
  //   spaceBetween: 30,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   loop: true,
  // });
  scrollTo(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}