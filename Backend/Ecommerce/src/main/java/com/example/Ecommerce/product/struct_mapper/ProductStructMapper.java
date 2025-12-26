package com.example.Ecommerce.product.struct_mapper;

import com.example.Ecommerce.product.dto.Product;
import com.example.Ecommerce.product.entity.ProductEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "Spring")
public interface ProductStructMapper {

    ProductEntity mapDTOTOEntity(Product product);

    Product mapEntityTODTO(ProductEntity productEntity);

    List<ProductEntity> mapDTOListTOEntityList(List<Product> products);

    List<Product> mapEntityListToDToList(List<ProductEntity> productEntities);
}
