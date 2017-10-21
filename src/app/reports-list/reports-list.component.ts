import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { Router ,NavigationEnd,ActivatedRoute, NavigationExtras} from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {
  private routerLink:any;
  public reports: any[] = [];

  constructor(private router :Router, 
    private route: ActivatedRoute,
    private ref :ChangeDetectorRef,
    private service : SharedService) {
    this.routerLink=this.router.url;
      this.service.setRouter('this.routerLink');
   }

  ngOnInit() {
    this.service.getReports().subscribe(
      (data: any[]) => {this.reports = data;},
      (error: Response) => console.log("Error <<<<<", error)
    );
  }

  logOut() {
    this.service.logout();
  }

  navigateTO(path) {
    this.router.navigate([path]);
  }

}
