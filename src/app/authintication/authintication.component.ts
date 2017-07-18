import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import {ValidationService} from './validation.service';
import * as firebase from 'firebase/app';

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
  }


  userSignUp(){
    
    var username = this.loginForm.get('userName').value;
    var nic = this.loginForm.get('nic').value;
    // var password = this.registrationForm.get('password').value;
    // var confirmPassword = this.registrationForm.get('confirmPassword').value;

    let email = nic + "@mail.example";

    // if(password !== confirmPassword) {
    //   alert("Password & confirm password not same.");
    //   return;
    // }

    if(!this.checkUserExists(nic)) {
      console.log("<<<<<<<<<<< register >>>>>>>> -----");
      // this.afAuth.auth.createUserWithEmailAndPassword(email, nic).then((user) => {
      //   // user register
      //   this.users = user;

      //   this.af.object(`/users/${nic}`).update({
      //     uuid: user.uid,
      //     name: username,
      //     email: email
      //   });
      //   this.router.navigate(['/home/insident_report']);

      // }).catch((error) => {
      //     if(error['code'] === 'auth/invalid-email') {
      //       alert("Invalieded emil address....");
      //     }

      //     alert(error.message);
      // });
    }else{
      console.log("<<<<<<<<<<< login >>>>>>>>>...");
       // this.login(email, nic);
    }
  }

  login(email, password) {
    // var username=this.loginForm.get('userName').value;
    // var password=this.loginForm.get('password').value;
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((user) => {
      // user login
      this.user = user;
      this.router.navigate(['/home/insident_report']);

    }).catch((error) => {
        alert(error.message);
    });
  }

  checkUserExists(nic) {

    const user = this.af.object(`users/${nic}`);
      user.subscribe(data => {
        console.log("<<<<<<< data >>>>>>>>>>", data);
        if(data.$value !== null) {
          console.log('User does not exist');
        } else {
          console.log('User does exist');
        }
      });
    // let isEquals = false;
    // this.users = this.af.list('/users', { preserveSnapshot: true });
    // this.users
    //   .subscribe(snapshots => {
    //     snapshots.forEach(snapshot => {
    //       console.log("<<<<<<<<<< equal 222 >>>>>>>>");
    //       if(snapshot.val().email === email) {
    //         console.log("<<<<<<<<<< equal 333>>>>>>>>");
    //         isEquals =  true;
    //       }
    //     });
    //   });
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
      nic: ['', [Validators.required, this.validationService.nicValidator]],
    });

    // this.registrationForm = this.fb1.group({
    //   userName: ['', [Validators.required]],
    //   email: ['', [Validators.required,]],
    //   password: ['', [Validators.required]],
    //   confirmPassword: ['', [Validators.required]],
    // });
  }

}
