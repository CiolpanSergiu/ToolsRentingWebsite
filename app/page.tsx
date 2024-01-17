import BrandsSlider from "./components/brands-slider/containers/Slider";
import Footer from "./components/footer/Footer";
import LandingPage from "./components/landing-page/LandingPage";
import Navbar from "./components/navbar/Navbar";
import ItemsPage from "./components/shop-items-page/ItemsPage";
import StoreProvider from "./StoreProvider";

export default function Home() {
  return (
    <StoreProvider>
      <>
        <header>
          <Navbar></Navbar>
        </header>
        <main className="max-w-screen">
          <LandingPage />
          <ItemsPage />
          <BrandsSlider />
          <Footer />
        </main>
        <footer></footer>
      </>
    </StoreProvider>
  );
}
