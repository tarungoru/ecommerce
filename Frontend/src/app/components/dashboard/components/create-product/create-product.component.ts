import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonDashboardService } from '../../common-dashboard.service';
import { Product } from '../../models/Product';
import { ProductCategory } from '../../models/ProductCategory';
import { NotificationService } from '../../../../notification.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit {

  categories:ProductCategory[] = [];

  productForm:FormGroup;
  
  constructor(private fb: FormBuilder, private commonService: CommonDashboardService, private notificationService: NotificationService) {
    this.productForm = this.fb.group({
      name:[],
      description:[],
      quantity:[],
      price: [],
      category: []
    });
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.commonService.getAllActiveCategory().subscribe((response:any) => {
      this.categories = response;
    });
  }

  createProduct() {

    const categoryName = this.productForm.get("category")?.value;
    const currentCategory = this.categories.filter(category => category.name === categoryName);
    
    const product:Product = {
      name: this.productForm.get("name")?.value,
      description: this.productForm.get("description")?.value,
      price: this.productForm.get("price")?.value,
      productCategory: currentCategory[0]
    };

    this.commonService.createProduct(product).subscribe({
      next: (response:any) => {
        this.notificationService.showSuccess(
          `${product.name} created Successfully`
        );
        this.productForm.reset();
      },
      error: (error:any) => {
        this.notificationService.showError(error.message);
      }
    });
  }


}
