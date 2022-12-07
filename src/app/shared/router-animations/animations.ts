import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const routeTransitionAnimations = trigger('transitionAnimation', [
  transition('home => project', [
    // direction of the transition, these names are set in the data of the router module
    style({ position: 'relative' }), // this will set position relative to the div containing the outlet
    query(':enter, :leave', [
      // as per official docs, children of the div must have position absolute, so we are applying it with one selector. Then we need another query block to specify specific styles to
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ right: '-100%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('0.4s ease-in', style({ right: '100%', opacity: 0 })),
      ]),
      query(':enter', [
        animate('0.4s ease-out', style({ right: '0%', opacity: 1 })),
      ]),
      query(':enter', animateChild()),
    ]),
  ]),
  transition('project => home', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('0.4s ease-in', style({ opacity: 0 }))]),
      query(':enter', [animate('0.4s ease-out', style({ opacity: 1 }))]),
      query(':enter', animateChild()),
    ]),
  ]),
]);
