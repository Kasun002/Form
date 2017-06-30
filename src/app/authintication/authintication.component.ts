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
  public registrationForm: FormGroup;


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
    this.afAuth.auth.signInWithEmailAndPassword(username, password).then((user) => {
     // user signed in
      this.router.navigate(['/home/insident_report']);
    }).catch((error) => {
        alert(error.message);
    });
  }

  register(){
    
    var username = this.registrationForm.get('userName').value;
    var email = this.registrationForm.get('email').value;
    var password = this.registrationForm.get('password').value;
    var confirmPassword = this.registrationForm.get('confirmPassword').value;

    if(password !== confirmPassword) {
      alert("Password & confirm password not same.");
      return;
    }

    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((user) => {
     // user register
      this.router.navigate(['/home/insident_report']);
    }).catch((error) => {
        alert(error.message);
    });
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

    this.registrationForm = this.fb1.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

}
