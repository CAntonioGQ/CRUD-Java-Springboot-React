import axios from "axios";

// Datos iniciales (pueden ser reemplazados por la obtención desde el servidor)
const initProducts = [
    {
        id: 1,
        name: 'Monitor Samsung 65',
        price: 500,
        description: 'El monitor es increíble'
    },
    {
        id: 2,
        name: 'IPhone 14',
        price: 800,
        description: 'El teléfono es increíble'
    }
];

// URL base para las solicitudes al servidor
const baseUrl = 'http://localhost:8080/products';

// Función para obtener la lista de productos (puede ser reemplazada por una solicitud al servidor)
export const listProduct = () => {
    return initProducts;
}

// Función para obtener todos los productos desde el servidor
export const findAll = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response;
    } catch (error) {
        console.error("Error en la función findAll:", error);
    }
    return null;
}

// Función para crear un nuevo producto en el servidor
export const create = async ({ name, description, price }) => {
    try {
        const response = await axios.post(baseUrl, {
            name,
            description,
            price
        });
        return response;
    } catch (error) {
        console.error("Error en la función create:", error);
    }
    return undefined;
}

// Función para actualizar un producto en el servidor
export const update = async ({ id, name, description, price }) => {
    try {
        const response = await axios.put(baseUrl + '/' + id, {
            name,
            description,
            price
        });
        return response;
    } catch (error) {
        console.error("Error en la función update:", error);
    }
    return undefined;
}

// Función para eliminar un producto en el servidor
export const remove = async (id) => {
    try {
        await axios.delete(baseUrl + '/' + id);
    } catch (error) {
        console.error("Error en la función remove:", error);
    }
}
