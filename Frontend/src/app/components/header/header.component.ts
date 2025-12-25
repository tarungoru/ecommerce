import { Component } from '@angular/core';
import { shopCategories } from '../../data';
import { link } from 'fs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor() { }
  shopCategories = shopCategories;
  selectedOption: string = 'My Account';

  options = [ { name: 'Register', link: '/login' }, { name: 'Login', link: '/login' }, { name: 'Dashboard', link: '/dashboard' }, { name: 'Profile', link: '/profile' }, { name: 'Logout', link: '/logout' } ];
}
