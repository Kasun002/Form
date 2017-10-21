import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class ActivateService implements CanActivate{

  constructor() { }

  canActivate(): boolean {
    // console.log(localStorage.getItem('firebase:authUser:AIzaSyC41J8dq4DxbNdk8f8BY_MCW6D5KpCMjfU:[DEFAULT]'));
    if (localStorage.getItem('firebase:authUser:AIzaSyC41J8dq4DxbNdk8f8BY_MCW6D5KpCMjfU:[DEFAULT]')) {
      return true;
    }
    return false;
  }
}
