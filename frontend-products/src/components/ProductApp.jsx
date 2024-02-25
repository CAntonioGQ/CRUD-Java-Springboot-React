import React, { useEffect, useState } from "react";
import { findAll, create, update, remove } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import { PropTypes } from "prop-types";
import { ProductForm } from "./ProductForm";

// Componente principal que gestiona la aplicación de productos
export const ProductApp = ({ title }) => {
    // Estado para almacenar la lista de productos
    const [products, setProducts] = useState([]);
    // Estado para almacenar la información del producto seleccionado
    const [productSelected, setProductSelected] = useState({
        id: 0,
        name: '',
        description: '',
        price: ''
    });

    // Función asincrónica para obtener la lista de productos
    const getProducts = async () => {
        try {
            // Llamada a la función findAll del servicio ProductService
            const result = await findAll();
            // Actualiza el estado de products con la lista de productos obtenida
            setProducts(result.data._embedded.products);
        } catch (error) {
            // Manejo de errores en caso de falla al obtener la lista de productos
            console.error("Error fetching products:", error);
        }
    };

    // Efecto que se ejecuta al montar el componente para obtener la lista inicial de productos
    useEffect(() => {
        getProducts();
    }, []);

    // Función asincrónica para agregar o actualizar un producto
    const handlerAddProduct = async (product) => {
        try {
            // Verifica si el producto ya tiene un ID asignado (existente en la base de datos)
            if (product.id > 0) {
                // Llamada a la función update del servicio ProductService para actualizar el producto
                const response = await update(product);
                // Actualiza el estado de products mapeando los productos y reemplazando el producto actualizado
                setProducts(products.map(prod => (prod.id === response.data.id ? { ...response.data } : prod)));
            } else {
                // Llamada a la función create del servicio ProductService para agregar un nuevo producto
                const response = await create(product);
                // Verifica si la respuesta contiene la propiedad 'data'
                if (response && response.data) {
                    // Actualiza el estado de products agregando el nuevo producto
                    setProducts([...products, { ...response.data }]);
                } else {
                    // Manejo de errores si la respuesta no contiene la propiedad 'data'
                    console.error("Error al agregar el producto. La respuesta no tiene la propiedad 'data'.", response);
                }
            }
        } catch (error) {
            // Manejo de errores en caso de falla al agregar o actualizar el producto
            console.error("Error al agregar o actualizar el producto:", error);
        }
    };

    // Función asincrónica para remover un producto
    const handlerRemoveProduct = async (id) => {
        try {
            // Llamada a la función remove del servicio ProductService para eliminar el producto
            await remove(id);
            // Actualiza el estado de products filtrando el producto con el ID especificado
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            // Manejo de errores en caso de falla al remover el producto
            console.error("Error al remover el producto:", error);
        }
    };

    // Función para manejar la selección de un producto
    const handlerPorductSelected = (product) => {
        // Actualiza el estado de productSelected con la información del producto seleccionado
        setProductSelected({ ...product });
    };

    // Renderiza la interfaz de usuario
    return (
        <div className="container my-4">
            <h2>{title}</h2>
            <div className="row">
                <div className="col">
                    {/* Componente ProductForm para agregar o editar productos */}
                    <ProductForm handlerAdd={handlerAddProduct} productSelected={productSelected} />
                </div>
                <div className="col">
                    {/* Componente ProductGrid para mostrar la lista de productos */}
                    {products.length > 0 ? (
                        <ProductGrid products={products} handlerRemove={handlerRemoveProduct} handlerPorductSelected={handlerPorductSelected} />
                    ) : (
                        <div className="alert alert-warning">No hay productos en el sistema</div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Definición de propTypes para la validación de props
ProductApp.propTypes = {
    title: PropTypes.string.isRequired,
};
