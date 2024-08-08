import About from "@/sections/homeSections/about/About";
import Hero from "@/sections/homeSections/hero/Hero";
import NewProducts from "@/sections/homeSections/newProducts/NewProducts";
import SpecialOffers from "@/sections/homeSections/specialOffers/SpecialOffers";
import TopProducts from "@/sections/homeSections/topProducts/TopProducts";

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
