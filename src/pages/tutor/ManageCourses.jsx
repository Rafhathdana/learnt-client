import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import HorizontalRule from "../../components/common/HorizontalRule";
import CourseCard from "../../components/tutor/CourseCard";

export default function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {});
  return (
    <>
      <SectionTitle
        title="Courses Created By You"
        description="Share the Knowledge world!"
      />
      <HorizontalRule />
      <div className="px-4 md:px-20 pb-10 md:pb-20 md:pt-6 nexa-font">
        <CourseCard courses={courses} loading={isLoading} />
      </div>
    </>
  );
}
