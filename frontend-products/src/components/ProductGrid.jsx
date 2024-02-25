import { PropTypes } from "prop-types";
import { ProductDetail } from "./ProductDetail";

// Componente ProductGrid para mostrar la lista de productos en una tabla
export const ProductGrid = ({ handlerPorductSelected, handlerRemove, products = [] }) => {
    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>name</th>
                    <th>description</th>
                    <th>price</th>
                    <th>update</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {/* Mapear sobre la lista de productos y renderizar un componente ProductDetail para cada producto */}
                {products.map(product => (
                    <ProductDetail
                        handlerPorductSelected={handlerPorductSelected}
                        handlerRemove={handlerRemove}
                        product={product}
                        key={product.name} // Clave única para cada producto
                    />
                ))}
            </tbody>
        </table>
    );
};

// Propiedades requeridas para el componente ProductGrid
ProductGrid.propTypes = {
    products: PropTypes.array.isRequired, // Lista de productos
    handlerRemove: PropTypes.func.isRequired, // Función para manejar la eliminación de productos
    handlerPorductSelected: PropTypes.func.isRequired // Función para manejar la selección de productos
};
