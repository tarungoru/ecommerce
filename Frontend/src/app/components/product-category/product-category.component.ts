import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  category: string | null = null;

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params:any) => {
     this.category = params['category'];
    });
  }
  
  products = [
  {
    id: 1,
    name: 'Sambar Powder',
    slug: 'sambar-powder',
    image: 'https://res.cloudinary.com/domh7dyrw/image/upload/v1766069849/nuvvula-karam_gstpqw.webp',
    description:
      'Authentic South Indian sambar powder made from freshly roasted spices for rich aroma and taste.',
    price: 120,
  },
  {
    id: 2,
    name: 'Rasam Powder',
    slug: 'rasam-powder',
    image: 'https://res.cloudinary.com/domh7dyrw/image/upload/v1766069849/nuvvula-karam_gstpqw.webp',
    description:
      'Traditional rasam powder with pepper, cumin, and coriander for a comforting, spicy flavor.',
    price: 260
  },
  {
    id: 3,
    name: 'Idli Podi (Gunpowder)',
    slug: 'idli-podi',
    image: 'https://res.cloudinary.com/domh7dyrw/image/upload/v1766069849/nuvvula-karam_gstpqw.webp',
    description:
      'Spicy idli podi made with lentils, red chilies, and sesame seeds. Perfect with ghee or oil.',
    price: 150
  },
  {
    id: 4,
    name: 'Curry Powder',
    slug: 'curry-powder',
    image: 'https://res.cloudinary.com/domh7dyrw/image/upload/v1766069849/nuvvula-karam_gstpqw.webp',
    description:
      'A versatile curry masala blend suitable for vegetables, gravies, and dry curries.',
    price : 180
  },
  {
    id: 5,
    name: 'Garam Masala',
    slug: 'garam-masala',
    image: 'https://res.cloudinary.com/domh7dyrw/image/upload/v1766069849/nuvvula-karam_gstpqw.webp',
    description:
      'Premium garam masala prepared using whole spices for intense flavor and aroma.',
    price : 200
  },
  {
    id: 6,
    name: 'Chilli Powder',
    slug: 'chilli-powder',
    image: 'https://res.cloudinary.com/domh7dyrw/image/upload/v1766069849/nuvvula-karam_gstpqw.webp',
    description:
      'Pure red chilli powder with vibrant color and medium spice level.',
    price : 150
  },
  {
    id: 7,
    name: 'Coriander Powder',
    slug: 'coriander-powder',
    image: 'https://res.cloudinary.com/domh7dyrw/image/upload/v1766069849/nuvvula-karam_gstpqw.webp',
    description:
      'Freshly ground coriander seeds for a mild, citrusy flavor in everyday cooking.',
    price: 190
  },
  {
    id: 8,
    name: 'Pepper Powder',
    slug: 'pepper-powder',
    image: 'https://res.cloudinary.com/domh7dyrw/image/upload/v1766069849/nuvvula-karam_gstpqw.webp',
    description:
      'Finely ground black pepper with strong aroma and heat.',
    price : 220
  }
];

}
