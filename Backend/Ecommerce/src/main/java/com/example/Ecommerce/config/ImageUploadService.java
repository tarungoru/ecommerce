package com.example.Ecommerce.config;

import com.example.Ecommerce.product.dto.Product;
import io.imagekit.sdk.ImageKit;
import io.imagekit.sdk.models.FileCreateRequest;
import io.imagekit.sdk.models.results.Result;
import org.springframework.web.multipart.MultipartFile;

public class ImageUploadService {

    public String uploadImage(MultipartFile file, Product product) throws Exception {

        ImageKit imageKit = ImageKitConfig.getInstance();

        String fileName = product.getProductCategory().getName() + "/" + product.getId() + "/" + product.getName();

        FileCreateRequest request = new FileCreateRequest(
                file.getBytes(),
                fileName
        );

        request.setFolder("/products");
        request.setUseUniqueFileName(false);
        request.setOverwriteFile(true);

        Result result = imageKit.upload(request);

        return result.getUrl();
    }
}
