package com.example.Ecommerce.product.repo;

import com.example.Ecommerce.product.entity.ProductCategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductCategoryRepository extends JpaRepository<ProductCategoryEntity, Integer> {
}
