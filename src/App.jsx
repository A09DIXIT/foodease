import Navbar from './Components/Navbar/Navbar';
import HeroBanner from './Components/HeroBanner/HeroBanner';
import CategorySlider from './Components/CategorySlider/CategorySlider';
import ProductList from './Components/ProductList/ProductList';

export default function App() {
  const sampleProduct = {
    name: "Organic Mangoes",
    price: 129,
    image: "https://source.unsplash.com/300x200/?mango",
    description: "Fresh and juicy organic mangoes.",
  };

  return (
    <>
      <Navbar />
      <HeroBanner />
      <CategorySlider />
     
      <ProductList />
    </>
  );
}
