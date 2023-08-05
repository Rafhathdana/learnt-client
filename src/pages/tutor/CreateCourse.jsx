import SectionTitle from "../../components/common/SectionTitle";
import HorizontalRule from "../../components/common/HorizontalRule";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import courseSchema from "../../utils/validation/course.schema";
export default function CreateCourse() {
  const [categories, setCategories] = useState([
    {
      _id: 1,
      title: "dvccsdxz",
    },
    {
      _id: 2,
      title: "dvccsdxz",
    },
    {
      _id: 3,
      title: "dvccsdxz",
    },
    {
      _id: 4,
      title: "dvccsdxz",
    },
  ]);
  const [imageError, setimageError] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(courseSchema),
  });

  const onSubmit = async () => {};
  return (
    <>
      <SectionTitle
        title="Create a new Course"
        description="Share the knowledge with the worls!"
        tutor
      />
      <HorizontalRule />
      <div className="px-4 md:px-20 pb-10 md:pb-20 md:pt-6 nexa-font">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Craft Compelling Courses
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Design,Engage,and Inspire with Learnt Best Course Creation
                    Toolkit
                  </p>
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Course title
                      </label>
                      <div className="mt-2">
                        <div
                          className={`flex rounded-md shadow-sm ring-1ring-inset ring-gray-300 focuss-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md ${
                            errors.title?.message &&
                            "ring-red-600 ring-1 rounded-md"
                          }`}
                        >
                          <input
                            type="text"
                            name="title"
                            id="title"
                            {...register("title")}
                            className={`block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6`}
                            placeholder="title"
                          />
                        </div>
                        <p className="text-red-600 nex-font text-xs mt-2 ml-1">
                          {errors.title?.message}
                        </p>
                      </div>
                    </div>
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="tagline"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Tag line
                      </label>
                      <div className="mt-2">
                        <div
                          className={`flex rounded-md shadow-sm ring-1ring-inset ring-gray-300 focuss-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md ${
                            errors.tagline?.message &&
                            "ring-red-600 ring-1 rounded-md"
                          }`}
                        >
                          <input
                            type="text"
                            name="tagline"
                            id="tagline"
                            {...register("tagline")}
                            autoComplete="tagline"
                            className={`block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6`}
                            placeholder="tagline"
                          />
                        </div>
                        <p className="text-red-600 nex-font text-xs mt-2 ml-1">
                          {errors.tagline?.message}
                        </p>
                      </div>
                    </div>
                    <div className="sm:col-span-6 flex">
                      <div className="w-full">
                        <label
                          htmlFor="category"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Catgegory
                        </label>
                        <div className="mt-2">
                          <select
                            name=""
                            id=""
                            className="bg-gray-100 block w-full rounded-md border-0 py-1 5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm-leading-6"
                            {...register("category")}
                          >
                            {categories.map((category) => (
                              <option key={category._id}>
                                {category.title}
                              </option>
                            ))}
                          </select>
                          <p className="text-red-600 nex-font text-xs mt-2 ml-1">
                            {errors.category?.message}
                          </p>
                        </div>
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="difficulty"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Difficulty
                        </label>
                        <div className="mt-2">
                          <select
                            name="difficulty"
                            id="difficulty"
                            className="bg-gray-100 block w-full rounded-md border-0 py-1 5 text-gray-900 shadow-sm ring-1rind-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading"
                            {...register("difficulty")}
                          >
                            <option className="capitalize" value="beginner">
                              beginner
                            </option>
                            <option className="capitalize" value="intermediate">
                              intermediate
                            </option>
                            <option className="capitalize" value="advanced">
                              advanced
                            </option>
                            <option className="capitalize" value="expert">
                              expert
                            </option>
                          </select>
                          <p className="text-red-600 nexa-font text-xs mt-2 ml-1">
                            {errors.difficulty?.message}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Price
                      </label>
                      <div className="mt-2">
                        <div
                          className={`flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md ${
                            errors.price?.message &&
                            "ring-red-600 ring-1 rounded-md"
                          }`}
                        >
                          <input
                            type="number"
                            name="price"
                            id="price"
                            {...register("price")}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="price"
                          />
                        </div>
                        <p className="text-red-600 nexa-font text-xs mt-2 ml-1">
                          {errors.difficulty?.message}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        About
                      </label>
                      <div className="mt-2">
                        <textarea
                          name="about"
                          id="about"
                          rows={3}
                          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                            errors.about?.message &&
                            "ring-red-600 ring-1 rounded-md"
                          }`}
                          defaultValue={""}
                        />
                      </div>
                      <p className="text-red-600 nexa-font text-xs mt-2 ml-1">
                        {errors.about?.message}
                      </p>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="cover-photo"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Cover Photo
                      </label>
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          <PhotoIcon
                            className="mx-auto h-12 w-12 text-gray-300"
                            aria-hidden="true"
                          />
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor=""
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2  focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                {...register("thumbnail")}
                                required
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG,JPG,WEBP up to 1MB
                          </p>
                        </div>
                      </div>
                      <p className="text-red-600 nexa-font text-xs mt-2 ml-1">
                        {errors.thumbnail?.message}
                      </p>
                      <p className="text-red-600 nexa-font text-xs mt-2 ml-1">
                        {imageError}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
            {/* done course creating area */}
          </div>
          {/* now below it will view what you editted  */}
        </div>
      </div>
    </>
  );
}
