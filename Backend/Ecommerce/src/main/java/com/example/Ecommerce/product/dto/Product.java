package com.example.Ecommerce.product.dto;

import com.example.Ecommerce.Enum.Status;
import com.example.Ecommerce.audit.bean.Audit;
import lombok.Data;


@Data
public class Product extends Audit {

    private Integer id;
    private String name;
    private String description;
    private String imageUrl;
    private Status status;
    private Integer price;
    private ProductCategory productCategory;
}
