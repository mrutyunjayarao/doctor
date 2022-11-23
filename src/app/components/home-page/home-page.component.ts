import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title:string = '';
  menuItems = [
    {title:'Dashboard',route:'/dashboard',icon:'dashboard'},
    {title:'Appointments',route:'/appointments',icon:'fact_check'},
    {title:'Q & A',route:'/qanda',icon:'quiz'},
    {title:'Registered Users',route:'/registered_users',icon:'group'},
    {title:'About Me',route:'/about_me',icon:'person_filled'},
    {title:'Articles',route:'/articles',icon:'article'},
    {title:'Gallery',route:'/gallery',icon:'gallery_thumbnail'},
    {title:'FAQ',route:'/faq',icon:'description'},
    {title:'Testimonials',route:'/testimonials',icon:'newspaper'},
    {title:'Settings',route:'/settings',icon:'settings'},
    {title:'Reset Password',route:'/reset_password',icon:'lock_reset'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
