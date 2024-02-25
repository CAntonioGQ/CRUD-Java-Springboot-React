// Componente ProductDetail para mostrar detalles de un producto
import React from 'react';
import { PropTypes } from "prop-types";

export const ProductDetail = ({ handlerPorductSelected, handlerRemove, product = [] }) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
                {/* Botón para actualizar el producto */}
                <button className="btn btn-secondary btn-sm" onClick={() => handlerPorductSelected(product)}>
                    update
                </button>
            </td>
            <td>
                {/* Botón para remover el producto */}
                <button className="btn btn-danger btn-sm" onClick={() => handlerRemove(product.id)}>
                    remove
                </button>
            </td>
        </tr>
    );
};

// Propiedades requeridas para el componente ProductDetail
ProductDetail.propTypes = {
    product: PropTypes.object.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerPorductSelected: PropTypes.func.isRequired
};
