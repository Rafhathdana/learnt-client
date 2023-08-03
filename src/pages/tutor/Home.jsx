import React from "react";
import Banner from "../../components/common/Banner";
import SectionTitle from "../../components/common/SectionTitle";
import HorizontalRule from "../../components/common/HorizontalRule";
import { Card } from "flowbite-react";

export default function Home() {
  return (
    <>
      <div className="pt-10 px-1 md:px-10 sm:px-5 bg-gray-200/95 pb-24">
        <Banner />
        <hr className="h-px my-3 md:mt-12 bg-gray-300 border-0 dark:bg-gray-700" />
        <SectionTitle
          title="Tutors"
          description="Meet Our Tutors."
          tutor="true"
        />
        <HorizontalRule />
        <Card className="flex justify-center px-3">
            <div className="max-w-4xl mb-10">

            </div>
        </Card>
      </div>
    </>
  );
}
