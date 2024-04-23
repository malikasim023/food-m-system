import React, { useState } from "react";

const Upload = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    category: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('price', productData.price);
    formData.append('description', productData.description);
    formData.append('category', productData.category);
    formData.append('image', imageFile);

    try {
      const response = await fetch('http://localhost:3001/api/products/upload', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setSuccessMessage('Product uploaded successfully');
        setProductData({
          name: '',
          price: '',
          description: '',
          category: ''
        });
        setImageFile(null);
      } else {
        console.error('Failed to upload product');
      }
    } catch (error) {
      console.error('Error uploading product:', error);
    }
  };

  return (
    <div className="h-screen bg-yellow-500 flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Upload Product</h2>
        {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input type="text" name="name" id="name" value={productData.name} onChange={handleChange} required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
            <input type="number" name="price" id="price" value={productData.price} onChange={handleChange} required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea name="description" id="description" value={productData.description} onChange={handleChange} required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
            <input type="text" name="category" id="category" value={productData.category} onChange={handleChange} required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Product Image:</label>
            <input type="file" name="image" id="image" onChange={handleFileChange} 
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"/>
          </div>
          <button  onSubmit={handleSubmit} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
