import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, selectedProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (selectedProduct) {
      setName(selectedProduct.name);
      setPrice(selectedProduct.price);
    } else {
      setName('');
      setPrice('');
    }
  }, [selectedProduct]);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, price });
    setName('');
    setPrice('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 bg-white shadow-lg rounded-xl p-6 space-y-4 max-w-md mx-auto"
    >
      <h2 className="text-lg font-semibold mb-4 text-center">
        {selectedProduct ? 'Actualizar producto' : 'Añadir nuevo producto'}
      </h2>
      <div>
        <label className="block text-gray-600 mb-1">Nombre del producto</label>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div>
        <label className="block text-gray-600 mb-1">Precio</label>
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <button
        className={`w-full ${selectedProduct ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'
          } text-white py-2 rounded-md`}
      >
        {selectedProduct ? 'Actualizar' : 'Añadir'}
      </button>
    </form>
  );
};

export default ProductForm;