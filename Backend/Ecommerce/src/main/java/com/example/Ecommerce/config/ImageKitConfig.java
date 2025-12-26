package com.example.Ecommerce.config;

import io.imagekit.sdk.ImageKit;
import io.imagekit.sdk.config.Configuration;

public class ImageKitConfig {

    private static ImageKit imageKit;

    public static ImageKit getInstance() {
        if (imageKit == null) {
            imageKit = ImageKit.getInstance();
            Configuration config = new Configuration(
                    "public_s91V8Jc4BWQHKihLDZSzajsTFgE=",
                    "private_yv128YpGxyrqxVW0GhGyJMuIMwk=",
                    "https://ik.imagekit.io/mywebsiteecommerce"
            );
            imageKit.setConfig(config);
        }
        return imageKit;
    }
}

