import { Component, OnInit } from '@angular/core';
import { CommonDashboardService } from '../../common-dashboard.service';
import { Product } from '../../models/Product';
import { ImageManagerComponent } from '../../dialogs/image-manager/image-manager.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  constructor(private commonService:CommonDashboardService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getProducts();
  }

  products:Product[] = [];

  getProducts() {
    const criteria = {};
    this.commonService.getProductsByCriteria(criteria).subscribe((response:Product[])=> {
      this.products = response;
    });
  }

  uploadImage() {
    const dialog = this.dialog.open(ImageManagerComponent, {
      width: '600px',
      height: '300px',
      data: {
        mode: 'Upload_view'
      }
    });

    dialog.afterClosed().subscribe((result:any) => {
      if (result) {
        
      }
    });
  }

  viewImage() {

  }
}
