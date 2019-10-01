import { Component } from '@angular/core';

import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private mScrollbarService: MalihuScrollbarService
  ) {}

  title = 'Poker Scrum';

  ngOnInit() {
    this.mScrollbarService.initScrollbar(document.body, { axis: 'y', theme: 'minimal-dark' });
  }
}
