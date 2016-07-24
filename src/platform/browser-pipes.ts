import { PLATFORM_PIPES } from '@angular/core';

export const APPLICATION_PIPES: any[] = [
];

export const PIPES = [
   { provide: PLATFORM_PIPES, multi: true, useValue: APPLICATION_PIPES }
];