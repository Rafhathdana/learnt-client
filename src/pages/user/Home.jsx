import { useState } from "react";
import Banner from "../../components/common/Banner";
import CategoryCard from "../../components/user/CategoryCard";
import TrendingCourse from "../../components/user/TrendingCourse";

export default function Home() {
  const [categories, setCategories] = useState([
    { title: "raf", description: "fyjhmbdd ndshjm  msbjhhmb sbjhmb s" },
    { title: "raf", description: "fyjhmbdd ndshjm  msbjhhmb sbjhmb s" },
    { title: "raf", description: "fyjhmbdd ndshjm  msbjhhmb sbjhmb s" },
  ]);
  return (
    <>
      <div className="pt-10 px-1 md:px-10 sm:px-5 bg-gray-200/95 pb-24">
        <Banner />
        <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700" />
        <CategoryCard categories={categories} />
        <TrendingCourse />
      </div>
    </>
  );
}
