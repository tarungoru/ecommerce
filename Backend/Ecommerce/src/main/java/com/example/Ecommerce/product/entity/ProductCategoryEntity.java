package com.example.Ecommerce.product.entity;

import com.example.Ecommerce.Enum.Status;
import com.example.Ecommerce.audit.Entity.AuditEntity;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ProductCategoryEntity extends AuditEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true)
    private String name;

    @Enumerated(EnumType.STRING)
    private Status status;

}
