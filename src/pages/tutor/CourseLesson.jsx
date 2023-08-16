import React, { useEffect, useState } from "react";
import Loading from "../../components/common/Loading";
import SectionTitle from "../../components/common/SectionTitle";
import HorizontalRule from "../../components/common/HorizontalRule";
import { Badge } from "flowbite-react";
import CreateLesson from "../../components/tutor/CreateLesson";

export default function CourseLesson() {
  const [course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
  });
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SectionTitle
            title={course?.title}
            description={`Providing Learnt Course Management tool = Manage Your ${course?.title} course`}
          />
          <HorizontalRule />
          <div className="flex nexa-font p-3">
            <div className="flex-1 p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <img
                src={course?.thumbnailURL}
                className="w-125 card ml-10 rounded"
                alt="alternate image"
              />
              <div className="mt-5 ml-10 flex gap-3 justify-center">
                <Badge color="info" className="w-fit capitalize">
                  {course.category}
                </Badge>
                <Badge color="warning" className="w-fit capitalize">
                  {course.difficulty}
                </Badge>
              </div>
              <h1 className="text-amber-500 text-3xl p-5">{course.title}</h1>
              <h3>{course.tagline}</h3>
              <h3 className="mt-5">Description -{course.about}</h3>
            </div>
            <div className="flex-1 p-10">
              <img src="" alt="" />
              <div className="flex justify-center">
                <CreateLesson course={course} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
