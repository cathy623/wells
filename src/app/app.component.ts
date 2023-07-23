import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
//import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,RouterModule,],
  template: `  
  <main> 
  <a [routerLink]="['/']">
  <header class="brand-name">
  <img class="brand-logo" src="/assets/pink.jpg" alt="logo" aria-hidden="true">
 
  </header>
  </a>
  <section class="content">
 <router-outlet></router-outlet>

  </section> 
  </main>
`,// <app-home></app-home>
 //<app-user-list></app-user-list>
// <img class="brand-logo" src="assets/Logo.jpg" alt="logo" aria-hidden="true">
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
