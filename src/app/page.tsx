import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Technologyes from "@/components/Technologyes";

export default function Page() {
  return (
    <div className="bg-[#040404] text-white">
      <Navbar />
      <Home />
      <Technologyes />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
