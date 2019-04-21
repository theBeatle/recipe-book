import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
 
})


export class EditprofileComponent implements OnInit {
  val: number=3;
  items1: MenuItem[];
  

    
  
  
  activeItem: MenuItem;
  ngOnInit() {
    this.items1= [
      {label: 'User Profile', icon: 'fa fa-fw fa-book', routerLink:['/user-profile']},
        {label: 'My favourite recipes', icon: 'fa fa-fw fa-chart-line', routerLink:['/favourite-recipes']},
        {label: 'My recipes', icon: 'fa fa-fw fa-calendar', routerLink:['/myrecipes']},
        {label: 'Edit profile', icon: 'fa fa-fw fa-life-ring',routerLink:['/editprofile']},
        // {label: 'Social', icon: 'fa fa-fw fa-concierge-bell', routerLink:['/settings']}
    ];
   
    
    
  this.activeItem = this.items1[0];
}

  
}
