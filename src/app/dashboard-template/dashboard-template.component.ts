import { Component, OnInit } from '@angular/core';
import { Router ,NavigationEnd, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-dashboard-template',
  templateUrl: './dashboard-template.component.html',
  styleUrls: ['./dashboard-template.component.css']
})
export class DashboardTemplateComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

}
