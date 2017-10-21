import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Router ,NavigationEnd,ActivatedRoute, NavigationExtras} from '@angular/router';
import { ActivateService } from '../shared/activate.service';
import { SharedService } from '../shared/shared.service';
import 'rxjs/add/operator/pairwise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public routerLink:any;
  private hasLogged: boolean = false;

  constructor(private router :Router, private route: ActivatedRoute,
    private ref :ChangeDetectorRef, private activateService: ActivateService, 
    private sharedService: SharedService) { 
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

  hasLoggedIn():boolean{
    return this.activateService.canActivate();
  }

  logout(){
    this.sharedService.logout();
  }

}
