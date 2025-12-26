package com.example.Ecommerce.Enum;

public enum Status {
    ACTIVE("A"),
    INACTIVE("I");

    private final String value;

    Status(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
