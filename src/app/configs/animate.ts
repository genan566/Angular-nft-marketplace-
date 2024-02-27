import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('HomePage => DetailsPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 1,
        width: '100%',
        transform: 'scale(1)',
      }),
    ]),
    query(':enter', [
      style({ top: '100%', opacity: 0, transform: 'scale(.2)' }),
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate(
          '300ms ease-out',
          style({ top: '-100%', opacity: 0, transform: 'scale(.2)' })
        ),
      ]),
      query(':enter', [
        animate(
          '300ms ease-out',
          style({ top: '0%', opacity: 1, transform: 'scale(1)' })
        ),
      ]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('DetailsPage => HomePage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 1,
        width: '100%',
        transform: 'scale(1)',
      }),
    ]),
    query(':enter', [
      style({ top: '-100%', opacity: 0, transform: 'scale(.2)' }),
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate(
          '300ms ease-out',
          style({ top: '100%', transform: 'scale(.2)', opacity: 0 })
        ),
      ]),
      query(':enter', [
        animate(
          '300ms ease-out',
          style({ top: '0%', transform: 'scale(1)', opacity: 1 })
        ),
      ]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('* <=> NotFound', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 1,
        width: '100%',
        transform: 'scale(1)',
      }),
    ]),
    query(':enter', [
      style({ top: '-100%', opacity: 0, transform: 'scale(.2)' }),
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate(
          '300ms ease-out',
          style({ top: '100%', transform: 'scale(.2)', opacity: 0 })
        ),
      ]),
      query(':enter', [
        animate(
          '300ms ease-out',
          style({ top: '0%', transform: 'scale(1)', opacity: 1 })
        ),
      ]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
