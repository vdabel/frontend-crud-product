import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminPage from './pages/AdminPage';

const App = () => (
  <Router>
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">Gestión de Productos</div>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            Inicio
          </Link>
        </div>
      </div>
    </nav>

    <main className="bg-gray-50 min-h-screen p-6">
      <Routes>
        <Route path="/" element={<AdminPage />} />
      </Routes>
    </main>
  </Router>
);

export default App; 