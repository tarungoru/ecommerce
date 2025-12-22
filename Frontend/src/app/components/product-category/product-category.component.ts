import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../data';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  category: string | null = null;

  productCategories = products;

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
}
