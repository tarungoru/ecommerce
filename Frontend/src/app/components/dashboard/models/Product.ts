import { ProductCategory } from "./ProductCategory";

export interface Product {
    id?:Number;
    name?:Number;
    description?:string;
    price?:Number;
    imageUrl?:string;
    status?:string;
    createdAt?:string;
    modifiedAt?:string;
    productCategory?:ProductCategory;
}