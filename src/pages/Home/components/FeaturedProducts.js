import { useEffect, useState } from "react";
import { ProductCard } from "../../../components/Elements/ProductCard";
import { getFeaturedList } from "../../../services";
import { toast } from "react-toastify";

export const FeaturedProducts = () => {

  const [featuredCourses, setFeaturedCourses] = useState([]);

  useEffect(() => {
    async function fetchFeaturedCourses () {
      try {
        const data = await getFeaturedList();
        setFeaturedCourses(data);
      } catch(error) {
        toast.error("Failed to fetch!", {closeButton: true, position: "bottom-center" });
      }
    }
    fetchFeaturedCourses();
  }, [])

  return (
    <div className="flex flex-col my-20">
        <h1 className="text-3xl text-center font-semibold ml-4 mb-8 dark:text-white">Featured Courses</h1>
        <div className="flex flex-col items-center lg:flex-row">
            {featuredCourses.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    </div>
  )
}
