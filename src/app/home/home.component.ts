import { Component, OnInit } from '@angular/core';
import { Router ,NavigationEnd, NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  getLoginUserType(type: string) {
  	 const navigationExtras: NavigationExtras = {
        queryParams: { 'type': type }
      };

      this.router.navigate(['/home/login'], navigationExtras);
  }

}
