package com.example.Ecommerce.product.dto;

import lombok.Data;


@Data
public class ProductDto {

    private Integer id;
    private String name;
    private Integer quantity;
    private Integer stockQuantity;
    private Integer price;
    private Integer priceAfterDiscount;
    private Integer categoryId;
}
