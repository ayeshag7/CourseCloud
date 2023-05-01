import { Hero } from "../Home/components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { TestimonialList } from "./components/TestimonialList";
import { FAQ } from "./components/FAQ";

export const HomePage = () => {

  return (
    <main>
      <Hero/>
      <FeaturedProducts />
      <TestimonialList />
      <FAQ/>
    </main>
  )
}
