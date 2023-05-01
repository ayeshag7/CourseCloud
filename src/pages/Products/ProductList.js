import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductCard } from "../../components/Elements/ProductCard";
import { FilterBar } from "./components/FilterBar";
import { useTitle } from "../../hooks/useTitle";
import { useFilter } from "../../context/filterContext";
import { getProductList } from "../../services";

export const ProductList = () => {
    useTitle("Explore Courses")
    const {productList, initializeProductList} = useFilter();
    const [show, setShow] = useState(false);
    const search = useLocation().search;
    const searchTerm = new URLSearchParams(search).get("q");

    useEffect(() => {
        async function fetchAllCourses () {
            const data = await getProductList(searchTerm);
            initializeProductList(data);
        }
        fetchAllCourses();
    }, [searchTerm]) //eslint-disable-line

  return (
    <main>
        <div className="flex flex-wrap justify-between mt-12 mb-8 ml-4 mr-12">
            <span className="text-3xl font-semibold dark:text-white">All Courses</span>
            <Link>
                <button onClick={() => setShow(!show)} className="dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
                        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                    </svg>
                </button>
            </Link>
        </div>
        <div className="flex flex-wrap justify-start mt-8 mb-16 other:justify-evenly">
            {productList && productList.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>

        { show && <FilterBar setShow={setShow} /> }

    </main>
  )
}
