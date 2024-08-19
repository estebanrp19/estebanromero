import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import Technologyes from "@/components/Technologyes";

export default function Page() {
  return (
    <div className="bg-[#364655] text-white">
      <Home />
      <About />
      <Technologyes />
      <Portfolio />
      <Contact />
    </div>
  );
}
