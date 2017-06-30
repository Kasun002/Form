import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-authintication',
  templateUrl: './authintication.component.html',
  styleUrls: ['./authintication.component.css']
})
export class AuthinticationComponent implements OnInit {

  formTogel:boolean=true;
  public loginForm: FormGroup;


  user: Observable<any>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(private fb1: FormBuilder,
  public afAuth: AngularFireAuth, 
  public af: AngularFireDatabase,
  private router: Router,
  private route: ActivatedRoute) {
    this.formInit();
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
    var username=this.loginForm.get('userName').value;
    var password=this.loginForm.get('password').value;
    let res=this.afAuth.auth.signInWithEmailAndPassword(username,password);
    this.router.navigate(['/home/insident_report']);
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

  formInit(){
    this.loginForm = this.fb1.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
