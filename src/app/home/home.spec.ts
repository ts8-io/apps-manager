import { beforeEachProviders, describe, inject, it } from '@angular/core/testing';
import { Component } from '@angular/core';
import { BaseRequestOptions, Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Home } from './home.component';

describe('Home', () => {
  
  beforeEachProviders(() => [
    BaseRequestOptions,
    MockBackend,
    {
      provide: Http,
      useFactory: (backend: ConnectionBackend, defaultOptions: RequestOptions) => {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    },
    Home
  ]);

  it('should have default data', inject([ Home ], (home: Home) => {
    expect(home.localState).toEqual({ value: '' });
  }));

  it('should log ngOnInit', inject([ Home ], (home: Home) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});