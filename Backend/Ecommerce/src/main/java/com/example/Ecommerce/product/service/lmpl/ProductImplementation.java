package com.example.Ecommerce.product.service.lmpl;

import com.example.Ecommerce.Enum.Status;
import com.example.Ecommerce.product.criteria.ProductCriteria;
import com.example.Ecommerce.product.dto.Product;
import com.example.Ecommerce.product.entity.ProductCategoryEntity;
import com.example.Ecommerce.product.entity.ProductEntity;
import com.example.Ecommerce.product.repo.ProductRepository;
import com.example.Ecommerce.product.service.ProductService;
import com.example.Ecommerce.product.specs.ProductSpecs;
import com.example.Ecommerce.product.struct_mapper.ProductStructMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProductImplementation implements ProductService {


    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductStructMapper productStructMapper;

    @Override
    public void createProduct(Product product){
        if (product.getStatus() == null) {
            product.setStatus(Status.ACTIVE);
        }

        ProductCategoryEntity productCategory = new ProductCategoryEntity();
        productCategory.setId(product.getProductCategory().getId());

        ProductEntity productEntity = productStructMapper.mapDTOTOEntity(product);
        productEntity.setCategory(productCategory);
        productRepository.save(productEntity);
    }

    @Override
    public List<Product> getAllProducts(ProductCriteria criteria) {
        List<ProductEntity> productEntities = productRepository.findAll(ProductSpecs.searchByCriteria(criteria));
        return productStructMapper.mapEntityListToDToList(productEntities);
    }
}
