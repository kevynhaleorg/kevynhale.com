import {trigger, animate, style, group, query, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('home => blog', [
    query(':enter, :leave', style({ opacity: 0 })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 1 }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
    ])
  ]),
  transition('blog => home', [
    group([
      query(':enter, :leave', style({ opacity: 0 })
      , { optional: true }),
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', opacity:1 }))
      ], { optional: true }),
    ])
  ])
])