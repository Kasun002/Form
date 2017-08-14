import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharedService {

  user: Observable<any>;
  users: FirebaseListObservable<any[]>;
  msgVal: string = '';
  value: FirebaseObjectObservable<any>;
  currentRouter:string;

  constructor(public afAuth: AngularFireAuth,
    public af: AngularFireDatabase,
    private router:Router,
  ) { }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/home'])
  }
  /**
   * 
   * @param route 
   */
  setRouter(route){
    this.currentRouter=route;
  }
  /**
   * 
   */
  getRouter(){
    return this.currentRouter;
  }
}
