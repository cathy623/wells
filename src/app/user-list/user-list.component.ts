import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Userlist } from '../userlist';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <section class="listing"> 
  <h2 class="listing-heading">{{ userList.name }}</h2> 
<div class= "images">

  <img class="listing-photo" [src]="userList.photo" alt="Exterior photo of {{userList.name}}">
  <a [routerLink]="['/details', userList.id]">CLick for bio </a>
    </div>

</section> `,  
// <button class = "primary" type = "button">follow</button>
  //  <div class="bio"> {{userList.tags }}, \n {{userList.bio }}, \n stock: {{userList.stock }}</div>
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {
@Input() userList!: Userlist;
}
