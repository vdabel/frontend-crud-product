import React from 'react';

const ProductTable = ({ products, onEdit, onDelete }) => (
  <div className="overflow-x-auto shadow-lg rounded-2xl">
    <table className="min-w-full text-sm text-gray-700 bg-white">
      <thead className="bg-gray-100 uppercase text-gray-600">
        <tr>
          <th className="px-6 py-3 text-left">Nombre del producto</th>
          <th className="px-6 py-3 text-left">Precio</th>
          <th className="px-6 py-3 text-center">Acción</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product._id} className="border-b hover:bg-gray-50">
            <td className="px-6 py-4">{product.name}</td>
            <td className="px-6 py-4">S/. {product.price}</td>
            <td className="px-6 py-4 text-center space-x-2">
              <button
                onClick={() => onEdit(product)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(product._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ProductTable;