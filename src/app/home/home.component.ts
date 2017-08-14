import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Router ,NavigationEnd,ActivatedRoute, NavigationExtras} from '@angular/router';
import 'rxjs/add/operator/pairwise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private routerLink:any;

  constructor(private router :Router, private route: ActivatedRoute,private ref :ChangeDetectorRef) { 
    this.routerLink=this.router.url;
  }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(data => {
        this.routerLink=this.router.url;
      });
  }

  getLoginUserType(type: string) {
  	 const navigationExtras: NavigationExtras = {
        queryParams: { 'type': type }
      };

      this.router.navigate(['/login'], navigationExtras);
  }

}
