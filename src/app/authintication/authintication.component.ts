import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-authintication',
  templateUrl: './authintication.component.html',
  styleUrls: ['./authintication.component.css']
})
export class AuthinticationComponent implements OnInit {

  formTogel:boolean=true;
  user: Observable<any>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    // this.items = af.list('/messages', {
    //   query: {
    //     limitToLast: 50
    //   }
    // });

    this.user = this.afAuth.authState;
  }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword('kasun@gmail.com','kasunlakmal');
    this.afAuth.auth.createUserWithEmailAndPassword('abaywardanakasun@gmail.com','kasun@2015');
  }

  reg(){
    this.afAuth.auth.createUserWithEmailAndPassword('abaywardanakasun@gmail.com','kasun@2015')
  }

  logout() {
      this.afAuth.auth.signOut();
  }

  Send(desc: string) {
      // this.items.push({ message: desc});
      // this.msgVal = '';
  }


  formSelector(type){
    if(type==='log'){
      this.formTogel=true;
    }else if(type==='reg'){
      this.formTogel=false;
    }else{
      this.formTogel=true;
    }
  }

}
