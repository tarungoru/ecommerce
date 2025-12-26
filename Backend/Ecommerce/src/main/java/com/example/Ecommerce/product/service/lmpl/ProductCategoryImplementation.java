package com.example.Ecommerce.product.service.lmpl;

import com.example.Ecommerce.Enum.Status;
import com.example.Ecommerce.product.dto.ProductCategory;
import com.example.Ecommerce.product.entity.ProductCategoryEntity;
import com.example.Ecommerce.product.repo.ProductCategoryRepository;
import com.example.Ecommerce.product.service.ProductCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ProductCategoryImplementation implements ProductCategoryService {

    @Autowired
    private ProductCategoryRepository repository;

    @Override
    public void createCategory(ProductCategory productCategory) {
        ProductCategoryEntity productCategoryEntity = new ProductCategoryEntity();

        productCategoryEntity.setName(productCategory.getName());
        productCategoryEntity.setStatus(Status.ACTIVE);

        try {
            repository.save(productCategoryEntity);
        } catch (DataIntegrityViolationException exception) {
            throw new RuntimeException("Category with name '" + productCategory.getName() + "' already exists");
        }
    }

    @Override
    public List<ProductCategory> getAllActiveCategory() {
        List<ProductCategoryEntity> productCategoryEntities = repository.findAll();
        List<ProductCategory> productCategoryList = new ArrayList<>();
        productCategoryEntities.forEach(productCategoryEntity -> {
            if (productCategoryEntity.getStatus().equals(Status.ACTIVE)) {
                ProductCategory productCategory = new ProductCategory();
                productCategory.setId(productCategoryEntity.getId());
                productCategory.setName(productCategoryEntity.getName());
                productCategory.setStatus(productCategoryEntity.getStatus());
                productCategory.setCreatedAt(productCategoryEntity.getCreatedAt());
                productCategory.setModifiedAt(productCategoryEntity.getModifiedAt());
                productCategoryList.add(productCategory);
            }
        });

        return productCategoryList;
    }

    @Override
    public void updateCategory(ProductCategory productCategory) {
        ProductCategoryEntity productCategoryEntity = repository.findById(productCategory.getId()).orElseThrow(() -> new RuntimeException("Category not found"));
        if (productCategory.getStatus() != null) {
            productCategoryEntity.setStatus(productCategory.getStatus());
        }

        if (productCategory.getName() != null) {
            productCategoryEntity.setName(productCategory.getName());
        }

        repository.save(productCategoryEntity);
    }
}
