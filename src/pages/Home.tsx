import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Hero";
import { ProductCard } from "../components/ProductCard";
import "./home.scss";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="home__container">
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
};
