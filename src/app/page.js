import Carousel from "./components/carousel/page";
import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";
import Sale from "./components/sale/page";
export default function Home() {
  return (
    <>
      <Sale />
      <Navbar />
      <Carousel />
      <Footer />
    </>
  );
}
