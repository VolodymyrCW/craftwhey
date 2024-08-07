import About from "@/sections/about/About";
import Hero from "@/sections/hero/Hero";
import NewProducts from "@/sections/newProducts/NewProducts";
import SpecialOffers from "@/sections/specialOffers/SpecialOffers";
import TopProducts from "@/sections/topProducts/TopProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <TopProducts />
      <About />
      <SpecialOffers />
      <NewProducts />
    </>
  );
}
