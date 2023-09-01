import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/admin/Layout";
import PageInfo from "../../components/common/PageInfo";
import { yupResolver } from "@hookform/resolvers/yup";
import categorySchema from "../../utils/validation/category.schema";
import { useForm } from "react-hook-form";
import TableOne from "../../components/admin/TableOne";
import { getAllCategoriesAPI } from "../../api/common";
import { createCategoryAPI } from "../../api/admin";
import { toast } from "react-hot-toast";
const tableData = {
  name: "Available Categories",
  head: ["name", "course count", "created", "description"],
};
export default function ManageCategory() {
  const [categories, setCategories] = useState([]);
  const tableDiv = useRef();
  const addNewCategoryDiv = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(categorySchema) });
  useEffect(() => {
    getAllCategoriesAPI().then((response) => {
      setCategories(response.data.categories);
    });
  }, []);
  const onSubmit = (data) => {
    createCategoryAPI(data)
      .then((response) => {
        tableDiv.current.scrollIntoView();
        toast.success("Category Added Successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            padding: "15px",
          },
        });
        reset();
      })
      .catch((err) => console.log("error occured - ", err));
  };
  return (
    <Layout>
      <PageInfo admin pageName={"Manage Categories"} />
      <div className="relative overflow-hidden bg-white shadow-1 dark:bg-gray-800 sm:rounded-lg mb-5 scroll-smooth">
        <div className="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
          <div>
            <h5 className="mr-3 font-semibold dark:text-white">
              Learnt Categories
            </h5>
            <p className="text-gray-500 dark:text-gray-400">
              Manage all your existing categories or add a new one
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center px-4 py-2 text-sm text-white bg-indigo-500 font-medium rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            onClick={() => addNewCategoryDiv.current.scrollIntoView()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 mr-2 -ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
            Add new category
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-9 sm:grid-cols-2">
        <div className="flex flex-col mb-10 gap-9" ref={tableDiv}>
          <TableOne tableData={tableData} categories={categories} />
        </div>
        {/* </div> */}
        <div
          className="flex flex-col w-3/5 gap-9"
          id="form"
          ref={addNewCategoryDiv}
        >
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Publish New Category
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    htmlFor="category"
                    className="mb-3 block text-black dark:text-white font-medium"
                  >
                    Category Title
                  </label>
                  <input
                    type="text"
                    {...register("title")}
                    placeholder="Default Input"
                    className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5
                              outline-none transition focus:border-primary active:border-primary disabled:cursor-default 
                              disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary
                              ${errors.title?.message && 'ring-red-600 ring-1 rounded-md'}`
                    } 
                  />
                  <p className="text-red-600 text-end nexa-font text-xs mt-2 ml-1">
                    {errors.title?.message}
                  </p>
                </div>
                <div>
                  <label className="mb-3 block font-medium text-black dark:text-white">
                    Category Description
                  </label>
                  <textarea
                    rows={6}
                    {...register("description")}
                    placeholder="Description..."
                    className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                      errors.description?.message &&
                      "ring-red-600 ring-1 rounded-md"
                    }`}
                  />{" "}
                  <p className="text-red-600 text-end nexa-font text-xs mt-2 ml-1">
                    {errors.description?.message}
                  </p>
                </div>
                <div className="w-full flex flex-end">
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
