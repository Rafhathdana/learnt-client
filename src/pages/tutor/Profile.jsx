import { useEffect, useState } from "react";
import ProfileLayout from "../../components/common/ProfileLayout";
import PageInfo from "../../components/common/PageInfo";
import {
  ExclamationCircleIcon,
  LockClosedIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import profileSchema from "../../utils/validation/profile.schema";
import { getTutorDetailsAPI, updateTutorDetailsAPI } from "../../api/tutor";
import { toast } from "react-hot-toast";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [tutorDetails, setTutorDetails] = useState({});
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileSchema),
  });
  useEffect(() => {
    console.log("mounted");
    getTutorDetailsAPI()
      .then((response) => {
        const tutorDetails = response.data.tutorDetails;
        setTutorDetails({
          name: tutorDetails.name,
          website: tutorDetails.website,
          age: tutorDetails.age,
          about: tutorDetails.about,
          address: tutorDetails.address,
          gitLink: tutorDetails.gitLink,
          linkedinLink: tutorDetails.linkedinLink,
          occupation: tutorDetails.occupation,
          qualification: tutorDetails.qualification,
          skills: tutorDetails.skills,
        });
        setValue("name", tutorDetails.name);
        setValue("website", tutorDetails.website);
        setValue("age", tutorDetails.age);
        setValue("about", tutorDetails.about);
        setValue("address", tutorDetails.address);
        setValue("gitLink", tutorDetails.gitLink);
        setValue("linkedinLink", tutorDetails.linkedinLink);
        setValue("occupation", tutorDetails.occupation);
        setValue("qualification", tutorDetails.qualification);
        setValue("skills", tutorDetails.skills);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleOnSubmit = (data) => {
    setError(null);
    const newData = JSON.parse(JSON.stringify(data));
    const oldData = JSON.parse(JSON.stringify(tutorDetails));
    const sortedNewData = JSON.stringify(newData, Object.keys(newData).sort());
    const sortedOldData = JSON.stringify(oldData, Object.keys(oldData).sort());
    if (sortedNewData === sortedOldData) {
      setError(
        "No change detected. Please review your entered data and make any necessary modifications before submitting."
      );
      return;
    }
    updateTutorDetailsAPI(data)
      .then((response) => {
        toast.success("Profile Updated Successfully", {
          duration: 3000,
        });
        setEditMode(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err?.response.errors.message);
      });
  };
  return (
    <ProfileLayout tutor>
      <PageInfo pageName={"profile"} tutor />
      <div className="isolate bg-white px-6 lg:px-8">
        <div className="mx-auto max-w-2xl relative text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Manage Profile
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Update Your Profile
          </p>
          <div className="absolute ml-13">
            {editMode ? (
              <h1 className="py-1 px-2 text-sm rounded-md bg-indigo-500 text-white">
                Edit Mode
              </h1>
            ) : (
              <h1 className="px-2 py-1 text-sm rounded-md bg-gray-500 text-white">
                View Only
              </h1>
            )}
          </div>
          <span
            className="absolute flex flex-col justify-center items-center right-10"
            data-te-toggle="tooltip"
            title={editMode ? "Turn off Edit mode" : "Turn On Edit Mode"}
          >
            {editMode ? (
              <PencilSquareIcon className="w-6 hover:scale-105 duration-300 cursor-pointer text-primary font-extrabold" />
            ) : (
              <LockClosedIcon className="w-6 hover:scale-105 duration-300 cursor-pointer text-red-500" />
            )}
            <Switch
              checked={editMode}
              onChange={() => setEditMode(!editMode)}
              className={classNames(
                editMode ? "bg-indigo-600" : "bg-gray-200",
                "flex w-8 flex-none cursor-pointer mt-3 rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors durattion-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              )}
            >
              <span className="sr-only">Agree to Policies</span>
              <span
                aria-hidden="true"
                className={classNames(
                  editMode ? "translate-x-3.5" : "translate-x-0",
                  "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                )}
              />
            </Switch>
          </span>
        </div>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  {...(editMode ? null : { disabled: true })}
                  type="text"
                  id="name"
                  autoComplete="off"
                  placeholder={tutorDetails.name}
                  {...register("name")}
                  className={classNames(
                    errors.name
                      ? "ring-red-600 rounded-md focus:ring-red-600"
                      : "ring-gray-300 focus:ring-indigo-600",
                    "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  )}
                />
              </div>
              <p className="text-red-600 nexa-font text-xs mt-2 ml-1">
                {errors.name?.message}
              </p>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="age"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Age
                <span className="text-xs ml-3 mb-1 text-gray-400 text-end">
                  (optional)
                </span>
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="age"
                  {...(editMode ? null : { disabled: true })}
                  id="age"
                  placeholder={tutorDetails.age}
                  {...register("age")}
                  className={classNames(
                    errors.age
                      ? "ring-red-600 rounded-md focus:ring-red-600"
                      : "ring-gray-300 focus:ring-indigo-600",
                    "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  )}
                />
                <p className="text-red-600 nexa-font text-xs mt-2 ml-1">
                  {errors.age?.message}
                </p>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="qualification"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Qualification
                <span className="text-xs ml-3 mb-1 text-gray-400 text-end">
                  (optional)
                </span>
              </label>
              <div className="mt-2 5">
                <div className="relative flex items-center">
                  {errors?.qualification && (
                    <ExclamationCircleIcon className="text-red-700 absolute w-6 text-center z-1 right-1" />
                  )}
                  <input
                    {...(editMode ? null : { disabled: true })}
                    type="text"
                    id="qualification"
                    autoComplete="off"
                    placeholder={tutorDetails.qualification}
                    {...register("qualification")}
                    className={classNames(
                      errors.qualification
                        ? "ring-red-600 rounded-md focus:ring-red-600"
                        : "ring-gray-300 focus:ring-indigo-600",
                      "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    )}
                  />
                </div>
                <p className="text-red-600 nexa-font text-xs mt-2 ml-1">
                  {errors.qualification?.message}
                </p>
                {watch("qualification") && !errors.qualification && (
                  <a
                    href={watch("qualification")}
                    className="focus:animate-ping-once relative items-center text-primary hover:text-indigo-800 text-xs py-2 pl-4 bg-gray-100 flex rounded"
                  >
                    {watch("qualification")}
                  </a>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="occupation"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Occupation
                <span className="text-xs ml-3 mb-1 text-gray-400 text-end">
                  (optional)
                </span>
              </label>
              <div className="mt-2.5">
                <input
                  {...(editMode ? null : { disabled: true })}
                  type="text"
                  id="occupation"
                  autoComplete="off"
                  placeholder={tutorDetails.occupation}
                  {...register("occupation")}
                  className={classNames(
                    errors.occupation
                      ? "ring-red-600 rounded-md focus:ring-red-600"
                      : "ring-gray-300 focus:ring-indigo-600",
                    "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  )}
                />
              </div>
              <p className="text-red-600 nexa-font text-xs mt-2 ml-1">
                {errors.occupation?.message}
              </p>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="skills"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Skills
                <span className="text-xs ml-3 mb-1 text-gray-400 text-end">
                  (optional)
                </span>
              </label>
              <div className="mt-2.5">
                <input
                  {...(editMode ? null : { disabled: true })}
                  type="text"
                  id="skills"
                  autoComplete="off"
                  placeholder={tutorDetails.skills}
                  {...register("skills")}
                  className={classNames(
                    errors.skills
                      ? "ring-red-600 rounded-md focus:ring-red-600"
                      : "ring-gray-300 focus:ring-indigo-600",
                    "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  )}
                />
              </div>
              <p className="text-red-600 nexa-font text-xs mt-2 ml-1">
                {errors.skills?.message}
              </p>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="address"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Address
                <span className="text-xs ml-3 mb-1 text-gray-400 text-end">
                  (optional)
                </span>
              </label>
              <div className="mt-2">
                <textarea
                  name="address"
                  id="address"
                  {...(editMode ? null : { disabled: true })}
                  rows={3}
                  {...register("address")}
                  placeholder={tutorDetails.address}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    errors.address?.message && "ring-red-600 ring-1 rounded-md"
                  }`}
                  defaultValue={""}
                />
              </div>
              <p className="text-red-600 nexa-font text-xs mt-2 ml-1">
                {errors.address?.message}
              </p>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Bio/About Me
              <span className="text-xs ml-3 mb-1 text-gray-400 text-end">
                (optional)
              </span>
            </label>
            <div className="mt-2.5">
              <textarea
                {...(editMode ? null : { disabled: true })}
                name="message"
                id="message"
                autoComplete="off"
                placeholder={tutorDetails.about}
                rows={4}
                {...register("about")}
                className={classNames(
                  errors.about
                    ? "ring-red-600 rounded-md focus:ring-red-600"
                    : "ring-gray-300 focus:ring-indigo-600",
                  "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                )}
                // className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <p className="text-red-600 nexa-font text-xs mt-2 ml-1">
              {errors.about?.message}
            </p>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="website"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Website/Blog
              <span className="text-xs ml-3 mb-1 text-gray-400 text-end">
                (optional)
              </span>
            </label>
            <div className="mt-2 5">
              <div className="relative flex items-center">
                {errors?.website && (
                  <ExclamationCircleIcon className="text-red-700 absolute w-6 text-center z-1 right-1" />
                )}
                <input
                  {...(editMode ? null : { disabled: true })}
                  type="text"
                  id="website"
                  autoComplete="off"
                  placeholder={tutorDetails.website}
                  {...register("website")}
                  className={classNames(
                    errors.website
                      ? "ring-red-600 rounded-md focus:ring-red-600"
                      : "ring-gray-300 focus:ring-indigo-600",
                    "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  )}
                />
              </div>
              <p className="text-red-600 nexa-font text-xs mt-2 ml-1">
                {errors.website?.message}
              </p>
              {watch("website") && !errors.website && (
                <a
                  href={watch("website")}
                  className="focus:animate-ping-once relative items-center text-primary hover:text-indigo-800 text-xs py-2 pl-4 bg-gray-100 flex rounded"
                >
                  {watch("website")}
                </a>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="gitLink"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                GitHub Link
                <span className="text-xs ml-3 mb-1 text-gray-400 text-end">
                  (optional)
                </span>
              </label>
              <div className="mt-2 5">
                <div className="relative flex items-center">
                  {errors?.gitLink && (
                    <ExclamationCircleIcon className="text-red-700 absolute w-6 text-center z-1 right-1" />
                  )}
                  <input
                    {...(editMode ? null : { disabled: true })}
                    type="text"
                    id="gitLink"
                    autoComplete="off"
                    placeholder={tutorDetails.gitLink}
                    {...register("gitLink")}
                    className={classNames(
                      errors.gitLink
                        ? "ring-red-600 rounded-md focus:ring-red-600"
                        : "ring-gray-300 focus:ring-indigo-600",
                      "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    )}
                  />
                </div>
                <p className="text-red-600 nexa-font text-xs mt-2 ml-1">
                  {errors.gitLink?.message}
                </p>
                {watch("gitLink") && !errors.gitLink && (
                  <a
                    href={watch("gitLink")}
                    className="focus:animate-ping-once relative items-center text-primary hover:text-indigo-800 text-xs py-2 pl-4 bg-gray-100 flex rounded"
                  >
                    {watch("gitLink")}
                  </a>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="linkedinLink"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                LinkedIn Link
                <span className="text-xs ml-3 mb-1 text-gray-400 text-end">
                  (optional)
                </span>
              </label>
              <div className="mt-2 5">
                <div className="relative flex items-center">
                  {errors?.linkedinLink && (
                    <ExclamationCircleIcon className="text-red-700 absolute w-6 text-center z-1 right-1" />
                  )}
                  <input
                    {...(editMode ? null : { disabled: true })}
                    type="text"
                    id="linkedinLink"
                    autoComplete="off"
                    placeholder={tutorDetails.linkedinLink}
                    {...register("linkedinLink")}
                    className={classNames(
                      errors.linkedinLink
                        ? "ring-red-600 rounded-md focus:ring-red-600"
                        : "ring-gray-300 focus:ring-indigo-600",
                      "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    )}
                  />
                </div>
                <p className="text-red-600 nexa-font text-xs mt-2 ml-1">
                  {errors.linkedinLink?.message}
                </p>
                {watch("linkedinLink") && !errors.linkedinLink && (
                  <a
                    href={watch("linkedinLink")}
                    className="focus:animate-ping-once relative items-center text-primary hover:text-indigo-800 text-xs py-2 pl-4 bg-gray-100 flex rounded"
                  >
                    {watch("linkedinLink")}
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center"></div>
          <div className="mt-10">
            <button
              {...(editMode ? null : { disabled: true })}
              type="submit"
              className={`${
                editMode
                  ? "bg-indigo-600 hover:bg-indigo-500"
                  : "bg-gray-400 cursor-not-allowed"
              } ${
                error
                  ? "ring-1 ring-opacity-40 ring-red-700 ring-offset-2"
                  : null
              } block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              Update Profile
            </button>
            <p className="text-red-600 nexa-font text-xs text-center mt-3 ml-1">
              {error}
            </p>
          </div>
        </form>
      </div>
    </ProfileLayout>
  );
}
