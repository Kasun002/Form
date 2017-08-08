import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharedService {

  user: Observable<any>;
  users: FirebaseListObservable<any[]>;
  msgVal: string = '';
  value: FirebaseObjectObservable<any>;

  constructor(public afAuth: AngularFireAuth,
    public af: AngularFireDatabase,
  ) { }

  logout() {
    this.afAuth.auth.signOut();
  }
}
