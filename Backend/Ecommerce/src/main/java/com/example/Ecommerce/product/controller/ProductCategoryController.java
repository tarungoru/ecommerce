package com.example.Ecommerce.product.controller;

import com.example.Ecommerce.product.dto.ProductCategory;
import com.example.Ecommerce.product.service.ProductCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product-category")
public class ProductCategoryController {

    @Autowired
    private ProductCategoryService productCategoryService;

    @PostMapping("/create")
    public void createProductCategory(@RequestBody final ProductCategory productCategory) {
        productCategoryService.createCategory(productCategory);
    }

    @GetMapping("/get-category")
    public List<ProductCategory> getAllActiveCategory() {
        return productCategoryService.getAllActiveCategory();
    }

    @PatchMapping("/update")
    public void updateCategory(@RequestBody final ProductCategory productCategory) {
        productCategoryService.updateCategory(productCategory);
    }
}
