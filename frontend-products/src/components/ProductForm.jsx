import { useEffect, useState } from "react";

// Componente ProductForm para el formulario de productos
export const ProductForm = ({ productSelected, handlerAdd }) => {
    // Estado para almacenar los datos del formulario
    const initialDataForm = {
        id: 0,
        name: '',
        description: '',
        price: ''
    };

    // Estado del formulario
    const [form, setForm] = useState(initialDataForm);

    // Desestructuración de los datos del formulario
    const { id, name, description, price } = form;

    // Efecto para actualizar el formulario cuando cambia el producto seleccionado
    useEffect(() => {
        setForm(productSelected);
    }, [productSelected]);

    // Función para manejar el cambio en los campos del formulario
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    // Renderización del formulario
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();

                // Validación de campos obligatorios
                if (!name || !description || !price) {
                    alert('Debe completar los datos del formulario');
                    return;
                }

                // Llamada al manejador de agregar producto
                handlerAdd(form);

                // Reiniciar el formulario
                setForm(initialDataForm);
            }}
        >
            <div>
                {/* Campo de entrada para el nombre */}
                <input
                    placeholder="Name"
                    className="form-control my-3 w-75"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                {/* Campo de entrada para la descripción */}
                <input
                    placeholder="Description"
                    className="form-control my-3 w-75"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                {/* Campo de entrada para el precio */}
                <input
                    placeholder="Price"
                    className="form-control my-3 w-75"
                    name="price"
                    value={price}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                {/* Botón para enviar el formulario */}
                <button type="submit" className="btn btn-primary">
                    {id > 0 ? 'Update' : 'Create'}
                </button>
            </div>
        </form>
    );
};
