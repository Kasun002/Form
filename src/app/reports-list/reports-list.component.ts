import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { Router ,NavigationEnd,ActivatedRoute, NavigationExtras} from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {
  private routerLink:any;

  constructor(private router :Router, 
    private route: ActivatedRoute,
    private ref :ChangeDetectorRef,
    private service : SharedService) {
    this.routerLink=this.router.url;
      this.service.setRouter('this.routerLink');
   }

  ngOnInit() {
  }

  logOut(){
    this.service.logout();
  }

}
