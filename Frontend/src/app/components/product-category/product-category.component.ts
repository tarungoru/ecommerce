import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../data';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent implements OnInit {

  category: string | null = null;

  productCategories = products;

  filterList:string[] = [];

  form: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
    this.form = this.fb.group({
      price75_150: [false],
      price151_300: [false],
      price301_500: [false],
    });
   }

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

  addFilter(filter: string) {
    if (this.filterList.includes(filter)) {
      const index = this.filterList.indexOf(filter);
      if (index > -1) {
        this.filterList.splice(index, 1);
      }
    } else {
      this.filterList.push(filter);
    }
  }
}
