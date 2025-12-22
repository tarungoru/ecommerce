import { Component } from '@angular/core';
import { shopCategories } from '../../data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor() { }
  shopCategories = shopCategories;
}
