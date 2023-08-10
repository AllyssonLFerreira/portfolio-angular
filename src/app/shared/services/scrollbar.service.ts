import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollbarService {
  getScrollbarWidth(): string {
    const scrollPosition = window.pageYOffset ||
        document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight ||
        document.documentElement.clientHeight || document.body.clientHeight || 1;
    const setHeight = Math.max(
      document.body.scrollHeight || 0,
      document.documentElement.scrollHeight || 0,
      document.body.offsetHeight || 0,
      document.documentElement.offsetHeight || 0
    );

    const scrollPercentage = (scrollPosition / (setHeight - windowHeight)) * 100;
    return scrollPercentage + '%';
  }
}
