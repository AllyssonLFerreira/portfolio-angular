import {Component, HostListener, OnInit} from '@angular/core';
import { ScrollbarService } from './shared/services/scrollbar.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  scrollBar:string = '0%';

  constructor(private scrollbarService: ScrollbarService, private router: Router) {

  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollBar = '0%';
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.scrollBar = this.scrollbarService.getScrollbarWidth();
  }
}
