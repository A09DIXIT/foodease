import Navbar from './Components/Navbar/Navbar';
import ProductList from './Components/ProductList/ProductList';
import HeroBanner from './Components/HeroBanner/HeroBanner';
import Footer from './Components/Footer/Footer';
import PromoBanner from './Components/PromoBanner/PromoBanner1';

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
     <PromoBanner />
      <Footer />
    </>
  );
}
