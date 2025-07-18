import React from "react";

// Dummy product data
const products = [
  {
    id: 1,
    name: "Organic Mangoes",
    price: 150,
    image: "/product (1).jpg",
  },
  {
    id: 2,
    name: "Fresh Tomatoes",
    price: 30,
    image: "/product (3).jpg",
  },
  {
    id: 3,
    name: "Basmati Rice",
    price: 90,
    image: "/product (2).jpg",
  },
  {
    id: 4,
    name: "Cold Pressed Oil",
    price: 250,
    image: "/product (4).jpg",
  },
  {
    id: 5,
    name: "Fresh Milk (1L)",
    price: 55,
   image: "/product (2).jpg"
  },
  {
    id: 6,
    name: "Organic Bananas",
    price: 40,
   image: "/product (4).jpg",
  },
  {
    id: 7,
    name: "Brown Bread",
    price: 35,
   image: "/product (2).jpg"
  },
  {
    id: 8,
    name: "Raw Honey",
    price: 180,
    image: "/product (4).jpg",
  },
];

// Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-xl transition-all duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-green-600 font-bold">₹{product.price}</p>
      <button className="mt-2 w-full bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition">
        Add to Cart
      </button>
    </div>
  );
};

// Product List Component
const ProductList = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl text-center font-bold mb-4">OUR PRODUCTS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
