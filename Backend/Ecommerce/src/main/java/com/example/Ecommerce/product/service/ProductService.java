package com.example.Ecommerce.product.service;
import com.example.Ecommerce.product.criteria.ProductCriteria;
import com.example.Ecommerce.product.dto.Product;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public interface ProductService {

    void createProduct(Product product);

    List<Product> getAllProducts(ProductCriteria criteria);
}
