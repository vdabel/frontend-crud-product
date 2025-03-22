import React, { useState, useEffect } from 'react';
import ProductTable from '../components/ProductTable';
import ProductForm from '../components/ProductForm';
import API from '../api';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = () => {
    API.get('/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddOrUpdate = data => {
    if (selectedProduct) {
      API.put(`/products/${selectedProduct._id}`, data).then(() => {
        fetchProducts();
        setSelectedProduct(null);
      });
    } else {
      API.post('/products', data).then(() => fetchProducts());
    }
  };

  const handleDelete = id => {
    API.delete(`/products/${id}`).then(() => fetchProducts());
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Panel de Administración</h1>
      <ProductTable
        products={products}
        onEdit={setSelectedProduct}
        onDelete={handleDelete}
      />
      <ProductForm
        onSubmit={handleAddOrUpdate}
        selectedProduct={selectedProduct}
      />
    </div>
  );
};

export default AdminPage;