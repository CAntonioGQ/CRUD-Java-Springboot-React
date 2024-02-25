package com.springboot.backend.backendproducts;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.springboot.backend.backendproducts.entities.Product;

@Configuration
// Clase de configuración de Spring. Indica que esta clase proporciona
// configuraciones adicionales para la aplicación.
public class DataRestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        // Expone los IDs de las entidades en la API REST.
        config.exposeIdsFor(Product.class);
    }

}
