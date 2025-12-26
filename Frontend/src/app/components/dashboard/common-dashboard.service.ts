import { Injectable } from '@angular/core';
import { HttpService } from '../../http.service';
import { Urls } from '../../url';
import { Observable } from 'rxjs';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class CommonDashboardService {

  constructor(private http: HttpService) { }

  createCategory(category: string): Observable<any> {
    return this.http.post(Urls.CREATE_PRODUCT_CATEGORY, { name: category });
  }

  getAllActiveCategory(): Observable<String[]> {
    return this.http.get(Urls.GET_PRODUCT_CATEGORIES);
  }

  createProduct(product:Product):Observable<any> {
    return this.http.post(Urls.CREATE_PRODUCT, product);
  }

  getProductsByCriteria(criteria:any):Observable<Product[]> {
    return this.http.post(Urls.GET_PRODUCTS, criteria);
  }
}
