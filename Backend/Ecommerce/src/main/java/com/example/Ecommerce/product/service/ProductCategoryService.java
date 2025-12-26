package com.example.Ecommerce.product.service;

import com.example.Ecommerce.product.dto.ProductCategory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductCategoryService {

    void createCategory(ProductCategory productCategory);

    List<ProductCategory> getAllActiveCategory();

    void updateCategory(ProductCategory productCategory);
}
