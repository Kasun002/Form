import { Injectable } from '@angular/core';
// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import swal from 'sweetalert2';
import 'rxjs/Rx' ;
import {NgProgressService} from 'ngx-progressbar'


@Injectable()
export class SharedService {

  user: Observable<any>;
  // users: FirebaseListObservable<any[]>;
  msgVal: string = '';
  // value: FirebaseObjectObservable<any>;
  currentRouter:string;
  nativeWindow: any;

  constructor(
    // public afAuth: AngularFireAuth,
    // public af: AngularFireDatabase,
    private router: Router,
    private http: Http,
    public progressService: NgProgressService
  ) { 
  this.nativeWindow = this.getNativeWindow();
}

  logout() {
    // this.afAuth.auth.signOut();
    this.router.navigate(['/home'])
  }
  /**
   * 
   * @param route 
   */
  setRouter(route) {
    this.currentRouter=route;
  }
  /**
   * 
   */
  getRouter() {
    return this.currentRouter;
  }

  getReports(): Observable<any> {
    
    this.progressService.start();

    return this.http.get('http://localhost:8090/api/forms')
      .map(
        (response: Response) => {
          return response.json().data
        }
      )
      .finally(() => {
        /** request completed */
        this.progressService.done();

      });
  }

  postReport(data) {
    /** request started */
    this.progressService.start();

    const body = data;
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8090/api/form', body, headers)
      .finally(() => {
        /** request completed */
        this.progressService.done();

      });
  }

  /*
    Ex:-
      msgDetaild = {
        title: 'Report Submit!',
        html: 'Report successfully submited.<br/>Report ID: '+ result.id+'<br/> Report Name: '+ result.name,
        type: 'success',
      }
  */
  showMessage(msgDetails) {
    swal(msgDetails);
  }

  downloadReportAsPdf($id) {

    var newWindow = this.nativeWindow.open();

    this.http.get('http://localhost:8090/api/form/pdf/'+$id)
      .map(
        (response: Response) => {
          if(response.json().success) {
            let pdfUrl = response.json().data;
            // open pdf in new window
            newWindow.location = pdfUrl;
          }else{
            
            let msgDetails = {
              title: 'Error!',
              text: 'Error occurred while loading pdf.',
              type: 'error',
              confirmButtonText: 'Ok'
            };

            this.showMessage(msgDetails);
          }
        }
      ).subscribe();
  }

  getNativeWindow() {
    return window;
  }
}
