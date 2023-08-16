import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Loading from "../../components/common/Loading";
import SectionTitle from "../../components/common/SectionTitle";
import HorizontalRule from "../../components/common/HorizontalRule";
import {
  BookOpenIcon,
  ClockIcon,
  CodeBracketIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Tab } from "@headlessui/react";

export default function Course() {
  const [course, setCourse] = useState(() => ({
    imageUrl:
      "https://secure.gravatar.com/avatar/c98bb1db01e83b0183281b6aa6173647?s=250&d=mm&r=g",
  }));
  const [isLoading, setIsLoading] = useState(false);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <Toaster />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex nexa-font">
          <div className="w-3/5 mx-3">
            <SectionTitle
              title="Course Overview"
              description="get an overview of the course here"
            />
            <HorizontalRule />
            <div className="flex justify-around px-20 mt-10 bg-white rounded-xl p-10">
              <div className="flex justify-center items-center">
                <span className="text-xl text-center px-4 text-gray-400">
                  Instructor
                  <HorizontalRule />
                  <h1 className="text-xl text-amber-500">
                    {course?.tutor?.name}
                  </h1>
                </span>
                <img
                  src={course.imageUrl}
                  alt="profile picture"
                  className="rounded-full w-20"
                />
              </div>
              <div className="flex flex-row-reverse justify-center items-center">
                <div className="text-xl text-center px-4 text-gray-400">
                  Category
                  <hr />
                  <span className="text-xl text-amber-500">
                    {course?.category || "programming"}
                  </span>
                </div>
                <CodeBracketIcon className="w-10" />
              </div>
            </div>
            <div className="bg-white flex p-3 my-3 rounded-lg">
              <ul className="flex justify-evenly w-full">
                <li className="flex gap-2">
                  <BookOpenIcon className="w-5 text-blue-500" />
                  {course.lessons?.length} Lessons
                </li>
                <li className="flex gap-2">
                  <ClockIcon className="w-5 text-blue-500" />
                  {course.totalDuration ?? "10 hours"}
                </li>
                <li className="flex gap-2">
                  <UserGroupIcon className="w-5 text-blue-500" />
                  {course.totalStudentsEnrolled ?? 3} enrolled
                </li>
              </ul>
            </div>
            <div className="flex justify-center bg-white rounded-xl mt-2">
              <div
                className="w-full px-2 py-2sm:px-4"
                style={{ minHeight: "31rem" }}
              >
                <Tab.Group>
                  <Tab.List className="flex space-x-1 rounded-xl bg-indigo-500 p-1">
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                          "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                          selected
                            ? "bg-white shadow"
                            : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                        )
                      }
                    >
                      Overview
                    </Tab>

                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                          "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                          selected
                            ? "bg-white shadow"
                            : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                        )
                      }
                    >
                      Lessons
                    </Tab>

                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                          "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                          selected
                            ? "bg-white shadow"
                            : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                        )
                      }
                    >
                      Instructor
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className="mt-2">
                    <Tab.Panel
                      className={classNames(
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                      )}
                    ></Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
