package com.springboot.backend.backendproducts;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
// Anotación que combina @Configuration, @EnableAutoConfiguration y
// @ComponentScan.
// @Configuration: Indica que esta clase contiene configuraciones para el
// contexto de la aplicación.
// @EnableAutoConfiguration: Habilita la configuración automática de Spring
// Boot.
// @ComponentScan: Escanea los componentes en el paquete base de esta clase y
// sus subpaquetes.
public class BackendProductsApplication {

	public static void main(String[] args) {
		// Inicia la aplicación Spring Boot.
		SpringApplication.run(BackendProductsApplication.class, args);
	}

}
