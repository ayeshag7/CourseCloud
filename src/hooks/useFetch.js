import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function fetchAllCourses () {
            const response = await fetch(url);
            const data = await response.json();
            setCourses(data)
        }
        fetchAllCourses();
    }, [url])

  return (
    {products: courses}
  )
}
