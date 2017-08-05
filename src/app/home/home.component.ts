import { Component, OnInit } from '@angular/core';
import { Router ,NavigationEnd, NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private routerLink:any;

  constructor(private router :Router) { 
    this.routerLink=this.router.url;
    console.log(this.routerLink,this.routerLink==='/dashboard');
  }

  ngOnInit() {
  }

  getLoginUserType(type: string) {
  	 const navigationExtras: NavigationExtras = {
        queryParams: { 'type': type }
      };

      this.router.navigate(['/login'], navigationExtras);
  }

}
