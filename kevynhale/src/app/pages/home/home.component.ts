import { Component, OnInit } from '@angular/core';
import { MatomoTracker } from 'ngx-matomo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private matomoTracker: MatomoTracker) { }

  title = "Kevyn Hale - Web Developer"

  content = "I am a fullstack web developer that builds custom modern web applications. I implement design and UX principles as I work with you to build a sleek app that both you and your users love. My code always comes with build tools, automation, and tests so that it’ll be easy for any developer to continue to add features!"

  buttontext = "Hire me to build a killer app!"

  info1 = "Full website, portfolio and blog coming in February 2019!"
  info2 = "I work with these and many more technologies."

  ngOnInit() {
  }

  trackClick(name: string) {
    this.matomoTracker.trackEvent("button", "click", name)
  }

}
