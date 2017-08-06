import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute, NavigationExtras, NavigationEnd } from '@angular/router';
import {ValidationService} from './validation.service';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-authintication',
  templateUrl: './authintication.component.html',
  styleUrls: ['./authintication.component.css']
})
export class AuthinticationComponent implements OnInit {

  public loginForm: FormGroup;
  public loginFormAdmin: FormGroup;
  public loginType = 'emp';
  public loginTypeEmployee ='emp';
  public loginTypeAdmin ='admin';

  user: Observable<any>;
  users: FirebaseListObservable<any[]>;
  msgVal: string = '';
  value: FirebaseObjectObservable<any>;

  constructor(private fb1: FormBuilder,
  public afAuth: AngularFireAuth, 
  public af: AngularFireDatabase,
  private router: Router,
  private validationService : ValidationService,
  private route: ActivatedRoute) {
    this.formInit();
    // this.items = af.list('/messages', {
    //   query: {
    //     limitToLast: 50
    //   }
    // });  
    this.users = af.list('/users', { preserveSnapshot: true });
    this.user = this.afAuth.authState;
  }

  ngOnInit() {
    this.route
      .queryParams.subscribe(data => {
        this.loginType = data.type;
      });
  }


  userSignUp() {
    
    var username = this.loginForm.get('userName').value;
    var nic = this.loginForm.get('nic').value.toUpperCase();
    // var password = this.loginFormAdmin.get('password').value;
    // var confirmPassword = this.loginFormAdmin.get('confirmPassword').value;

    let email = nic + "@mail.example";

    this.afAuth.auth.signInWithEmailAndPassword(email, nic).then((user) => {
      // user login
      this.user = user;
      // this.router.navigate(['/home/insident_report']);
      this.router.navigate(['/reports-list']);

    }).catch((error) => {
        if(error['code'] === 'auth/user-not-found') {
           this.afAuth.auth.createUserWithEmailAndPassword(email, nic).then((user) => {
            // user register
            this.users = user;

            this.af.object(`/users/${nic}`).update({
              uuid: user.uid,
              name: username,
              email: email
            });
            // this.router.navigate(['/home/insident_report']);
            this.router.navigate(['/reports-list']);
          }).catch((error) => {
              if(error['code'] === 'auth/invalid-email') {
                alert("Invalieded emil address....");
              }

              alert(error.message);
          });
        }else{
          alert(error.message);
        }
    });
  }

  adminLogin() {
    var email = this.loginFormAdmin.get('email').value;
    var password = this.loginFormAdmin.get('password').value;

    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((user) => {
      // admin login
      this.user = user;

      // TODO :- need to change the route
      // this.router.navigate(['/home/insident_report']);
      this.router.navigate(['/reports-list']);

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

  formInit(){
    this.loginForm = this.fb1.group({
      userName: ['', [Validators.required]],
      nic: ['', [Validators.required, this.validationService.nicValidator]],
    });

    this.loginFormAdmin = this.fb1.group({
      email: ['', [Validators.required, this.validationService.emailValidator]],
      password: ['', [Validators.required]],
    });
  }

}
