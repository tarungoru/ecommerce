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
    link: "/categories/sweets",
    children: [
      {
        title: "Traditional Sweets",
        link: "/categories/sweets/traditional"
      },
      {
        title: "Dry Fruit Sweets",
        link: "/categories/sweets/dry-fruit"
      },
      {
        title: "Milk-Based Sweets",
        link: "/categories/sweets/milk"
      },
      {
        title: "Bengali Sweets",
        link: "/categories/sweets/bengali"
      }
    ]
  },
  {
    title: "Pickles",
    link: "/categories/pickles",
    children: [
      {
        title: "Veg Pickles",
        link: "/categories/pickles/veg"
      },
      {
        title: "Non-Veg Pickles",
        link: "/categories/pickles/non-veg"
      }
    ]
  },
  {
    title: "Podi's & Masalas",
    link: "/categories/podis-masalas"
  },
  {
    title: "Snacks",
    link: "/categories/snacks",
    children: [
      {
        title: "Namkeen",
        link: "/categories/snacks/namkeen"
      },
      {
        title: "Chips & Fryums",
        link: "/categories/snacks/chips"
      }
    ]
  },
  {
    title: "Papads",
    link: "/categories/papads"
  }
];
}
