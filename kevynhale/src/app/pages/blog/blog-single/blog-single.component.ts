import { Component, OnInit } from '@angular/core';
import { IBlogEntry } from '../../../redux';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent implements OnInit {

  constructor() { }

  entry: IBlogEntry = {
    id: '1',
    title: "The First Blog Post",
    date: "January 17th, 2019",
    summary: '',
    imageBodyUrl: "assets/images/blog1-body.png",
    body: body
  }

  ngOnInit() {
  }

}

const body = `First proper work journal entry, exciting! My plan is to do these every week, but this one covers the last two weeks as I'd like to get the entire year in here.
<br><br>
<b>Rebuilding my personal site</b><br>
Last week (Dec 31–Jan 1) was a short week for me as we were wrapping up the holidays, but I did manage to design (with a lot of input from Steve), build, and launch my new personal website, which is where you're reading this post now.
<br><br>
Everyone's personal website these days is a blog — a site centered around a bunch of articles, listed in reverse chronological order, where the recency of a post determines where it's featured on the site. When I was a kid, websites were just websites, not blogs. Pages were just pages, not posts, and the content was organized by hand, not by date.
<br><br>
My previous site was a blog, and it sucked. So I built this new one, where I can just create pages for anything I want, and organize the content however it makes the most sense to me. All of my old blog posts are still here, but they're in the archives, not right on the homepage.
<br><br>
I have a few more things I need to do like update the actual article pages (they still use the old layout and CSS), add some content to the screencasts page, and try to decide on some more consistent link styling (there's like 5 different treatments on the site right now), but overall I'm really happy with where it's at.
<br><br>
The site is built with Jigsaw and Tailwind CSS, and hosted on Netlify.
<br><br>
Refactoring Tailwind internals and the mystifying performance issue<br>
A while ago I added a plugin system to Tailwind that makes it easy to add new classes using a JavaScript API. This has been great, but it meant that inside Tailwind itself there were two ways to register new classes:
<br><br>
The original internal-only system that all of the built-in utility modules like backgroundAttachment, display, maxHeight, whitespace, etc. use.
<br><br>
The new plugin system that end users use.
<br><br>
In v0.5.0, the .container class was converted to a built-in plugin because it was very much a special case and made the internals code more complex.
<br><br>
This week I wanted to convert all of the built-in utility modules to use the plugin system under the hood to hopefully make it possible to delete a ton of code, and make the plugin system the One True Way™ that new classes are registered inside of Tailwind.
<br><br>
I spent a few days making all of the mind-numbingly tedious changes necessary to convert all 50 of the existing utility modules into plugins, all while keeping the tests passing, and then ran a full build to double-check these changes hadn't created any performance issues.
<br><br>
I expected things to be a little bit slower because the plugin system uses postcss-js which means there's an extra step transforming that syntax into raw PostCSS nodes which wasn't there in the legacy system that used the PostCSS API directly.
<br><br>
But it wasn't just a little bit slower, it was like 7-8x slower.
<br><br>
A full babelify-and-generate-all-of-our-CDN-files build took about 5 seconds on my machine on the master branch, and on the new modules-as-plugins branch it took more like 40 seconds.
<br><br>
My first thought was "shit, this postcss-js stuff is way slower than I expected," but after some good old console.log debugging, I found that using postcss-js was actually a tiny bit faster than what I had been doing in the legacy system. What the fuck?!
<br><br>
I asked on Twitter if anyone had any recommendations on how to profile one-off Node scripts, and Romain Lanz suggested a tool called 0x, which was exactly what I needed.
<br><br>
I ran it against both branches to generate a flamegraph and find out where most of the time was being spent, and to my surprise, my code hadn't gotten slower at all. The slow-down was actually happening in the PostCSS stringifier — the code responsible for taking a tree of PostCSS nodes and generating the actual CSS output as a string.
<br><br>
I hadn't changed any of my dependencies between the two branches, so I knew something I was doing in the new branch was making it much more difficult for PostCSS to stringify the CSS.
<br>
I spent all day on Thursday trying to figure out what the difference was by trying to compare the nodes I was generating on the master branch to the nodes I was generating on the new branch, but I couldn't for the life of me see a difference. Logging the nodes from both branches to disk just created two files that were the exact same length, with the only difference being the order of a few properties on the objects.
<br>
I was pretty defeated at this point. I didn't want to revert all the work I had done, but I also couldn't use any of this code if it slowed the builds down this much.
<br>
On a long shot, I reached out to Andrey Sitnik, the creator of PostCSS, hoping I could pay him for an hour of his time to help me track down the issue. He graciously offered to help me for free, and we scheduled some time to look at the problem on Friday morning.
<br>
Debugging with the creator of PostCSS<br>
I got on a call with Andrey at 8am my time and showed him the issue. He had a few ideas to try first to try and narrow down the problem (like disabling sourcemaps), but nothing exposed the root cause.`
