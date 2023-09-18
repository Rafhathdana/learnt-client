import { useEffect, useState } from "react";
import Banner from "../../components/common/Banner";
import CategoryCard from "../../components/user/CategoryCard";
import TrendingCourse from "../../components/user/TrendingCourse";
import { getAllCategoriesAPI } from "../../api/common";
import TopBanner from "../../components/common/TopBanner";
import TabSection from "../../components/user/TabSection";
import About from "../../components/common/About";
import FooterContent from "../../components/common/FooterContent";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const promotion = {
    title: "react",
    description:
      "From the person who made javascript easy as possible introducing",
    link: "/explore",
  };
  const closeBanner = () => {
    setShowComponent(false);
  };
  useEffect(() => {
    getAllCategoriesAPI().then(({ data }) => {
      setCategories(data.categories);
    });
    setTimeout(() => {
      setShowComponent(true);
    }, 5000);
  }, []);
  return (
    <>
      <TopBanner
        linkTitle={promotion.title}
        to={promotion.link}
        description={promotion.description}
        showComponent={showComponent}
        closeBanner={closeBanner}
      />
      <div className="pt-10 px-1 md:px-10 sm:px-5 bg-gray-200/95 pb-24">
        <Banner />
        <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700" />
        <CategoryCard categories={categories} />
        <TrendingCourse />
        <TabSection />
        <About />
        <FooterContent />
      </div>
    </>
  );
}
