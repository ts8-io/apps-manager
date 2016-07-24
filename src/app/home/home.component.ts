import { Component } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  templateUrl: './home.template.html'
})
export class Home {
  localState = { value: '' };

  constructor(public appState: AppState) { }

  ngOnInit() {
    console.log('hello `Home` component');
  }

  submitState(value: any) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}