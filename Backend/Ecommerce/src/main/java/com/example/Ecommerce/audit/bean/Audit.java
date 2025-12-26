package com.example.Ecommerce.audit.bean;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class Audit {
    private Date createdAt;
    private Date modifiedAt;
}