package com.example.Ecommerce.product.controller;

import com.example.Ecommerce.product.criteria.ProductCriteria;
import com.example.Ecommerce.product.dto.Product;
import com.example.Ecommerce.product.dto.ProductCategory;
import com.example.Ecommerce.product.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping(value = "/create")
    public void createProduct(@RequestBody Product product) {
        productService.createProduct(product);
    }

    @PostMapping("/get-products")
    public List<Product> getAllProducts(@RequestBody final ProductCriteria criteria) {
        return productService.getAllProducts(criteria);
    }
}
