import CarouselLoad from '../components/CarouselLoad';
import ProductList from '../components/ProductList';

function Home() {
  return (
    <>
      <CarouselLoad />
      <ProductList page="home" category="fashion" />
      <ProductList page="home" category="accessory" />
      <ProductList page="home" category="digital" />
    </>
  );
}

export default Home;
