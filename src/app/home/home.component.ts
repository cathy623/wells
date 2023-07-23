import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../user-list/user-list.component';
import { Userlist } from '../userlist';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    UserListComponent
  ],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Search for user" #filter>
      <button class="primary" type="button"(click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
    <app-user-list *ngFor= "let userList of filteredUserList" [userList]= " userList"></app-user-list>
   
  </section>
`,
  styleUrls: ['./home.component.css']
})//
export class HomeComponent {

  //readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

userList: Userlist[] = [];
listingService: ListingService = inject(ListingService);
filteredUserList: Userlist[]=[];
constructor(){
  this.userList = this.listingService.getAllUserList();
  this.filteredUserList = this.userList;
}

filterResults(text:string){
  if (!text){
    this.filteredUserList =this.userList;
  }
  this.filteredUserList = this.userList.filter(
    userList => userList?.name.toLocaleLowerCase().includes(text));
}

}
