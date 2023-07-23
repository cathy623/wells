import { Component, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Userlist } from '../userlist';
import { ListingService } from '../listing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `

    <article>
    <img class="listing-photo" [src]="userList?.photo"
      alt="Exterior photo of {{userList?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{userList?.name}}</h2>
      <p class="listing-location">{{userList?.stock}}, {{userList?.bio}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this Company</h2>
      <ul>
        <li>Stock: {{userList?.stock}}</li>
       
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Sign up</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  </article>
      

   
  `, //<li>Does this location have wifi: {{userList?.wifi}}</li>
       // <li>Does this location have laundry: {{userList?.laundry}}</li>
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  listingService= inject(ListingService);
  userList: Userlist | undefined; 
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
  constructor() {
     const userListId = Number(this.route.snapshot.params['id']);
     this.userList= this.listingService.getUserListById(userListId);
}submitApplication() {
  this.listingService.submitApplication(
    this.applyForm.value.firstName ?? '',
    this.applyForm.value.lastName ?? '',
    this.applyForm.value.email ?? ''
  );
}
}


