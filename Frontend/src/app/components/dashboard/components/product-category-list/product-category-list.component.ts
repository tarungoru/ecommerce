import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommonDashboardService } from '../../common-dashboard.service';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrl: './product-category-list.component.css'
})
export class ProductCategoryListComponent implements OnInit {

  constructor(private commonService:CommonDashboardService) {}

  categoryList:any = [];

  ngOnInit(): void {
    this.getCategoryList();
  }


  getCategoryList() {
    this.commonService.getAllActiveCategory().subscribe((response:any) => {
      this.categoryList = response;
    });
  }

}
