import { CONFIG } from "./config";

export class Urls {

    public static CREATE_PRODUCT_CATEGORY = CONFIG.API_PREFIX + "/product-category/create";
    public static GET_PRODUCT_CATEGORIES = CONFIG.API_PREFIX + "/product-category/get-category";
    public static CREATE_PRODUCT = CONFIG.API_PREFIX + "/product/create";
    public static GET_PRODUCTS = CONFIG.API_PREFIX + "/product/get-products";

}