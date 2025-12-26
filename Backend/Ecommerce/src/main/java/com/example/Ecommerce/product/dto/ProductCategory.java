package com.example.Ecommerce.product.dto;

import com.example.Ecommerce.Enum.Status;
import com.example.Ecommerce.audit.bean.Audit;
import jakarta.persistence.Column;
import lombok.Data;

@Data
public class ProductCategory extends Audit {

    private Integer id;

    @Column(unique = true)
    private String name;

    private Status status;

}
