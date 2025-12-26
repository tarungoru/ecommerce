package com.example.Ecommerce.product.entity;

import com.example.Ecommerce.Enum.Status;
import com.example.Ecommerce.audit.Entity.AuditEntity;
import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "product")
@Data
public class ProductEntity extends AuditEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    private Status status;

    private Integer price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private ProductCategoryEntity category;

}
