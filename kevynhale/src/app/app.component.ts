import { Component } from '@angular/core';
import { MatomoInjector } from 'ngx-matomo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private matomoInjector: MatomoInjector) {
    this.matomoInjector.init('analytics.kevynhale.com/piwik.php', 3)
  }
  title = 'kevynhale';
}
