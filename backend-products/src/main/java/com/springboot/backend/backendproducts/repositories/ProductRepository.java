package com.springboot.backend.backendproducts.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.springboot.backend.backendproducts.entities.Product;

// Permite solicitudes desde el origen especificado (permisos CORS)
@CrossOrigin(origins = "http://localhost:5173")
// Define que esta interfaz es un recurso de repositorio REST con la ruta
// "products"
@RepositoryRestResource(path = "products")
public interface ProductRepository extends CrudRepository<Product, Long> {
    // CrudRepository proporciona operaciones CRUD estándar (guardar, recuperar,
    // actualizar, eliminar)
    // para la entidad Product con identificadores de tipo Long.
}
