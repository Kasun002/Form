import { Component, OnInit } from '@angular/core';
import { Router ,NavigationEnd, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-home-template',
  templateUrl: './home-template.component.html',
  styleUrls: ['./home-template.component.css']
})
export class HomeTemplateComponent implements OnInit {

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
