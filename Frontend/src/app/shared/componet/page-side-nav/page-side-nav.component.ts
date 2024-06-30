import { Component } from '@angular/core';

export interface NavigationItem{
  value: string;
  link : string;
}

@Component({
  selector: 'page-side-nav',
  templateUrl: './page-side-nav.component.html',
  styleUrl: './page-side-nav.component.css'
})
export class PageSideNavComponent {
  panelName:string='Admin Panel';
  navItems: NavigationItem[] = [];
  constructor(){
    this.navItems = [
      {value: 'View Books', link: 'view-books'},
      {value: 'My Orders', link: 'my-books'},
    ]
  }
}
  