import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  shopCategories: any[] = [
  {
    title: "Sweets",
    link: "sweets",
    children: [
      {
        title: "Traditional Sweets",
        link: "traditional"
      },
      {
        title: "Dry Fruit Sweets",
        link: "dry-fruit"
      },
      {
        title: "Milk-Based Sweets",
        link: "milk"
      },
      {
        title: "Bengali Sweets",
        link: "bengali"
      }
    ]
  },
  {
    title: "Pickles",
    link: "pickles",
    children: [
      {
        title: "Veg Pickles",
        link: "veg"
      },
      {
        title: "Non-Veg Pickles",
        link: "non-veg"
      }
    ]
  },
  {
    title: "Podi's and Masalas",
    link: "podis-masalas"
  },
  {
    title: "Snacks",
    link: "snacks",
    children: [
      {
        title: "Namkeen",
        link: "namkeen"
      },
      {
        title: "Chips and Fryums",
        link: "chips"
      }
    ]
  },
  {
    title: "Papads",
    link: "papads"
  }
];
}
