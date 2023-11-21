import { Toaster, toast } from "react-hot-toast";
import Logo from "../../components/common/Logo";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { tutorSignInAPI } from "../../api/tutor";
import { useDispatch, useSelector } from "react-redux";
import { setTutor } from "../../features/tutorSlice";

export default function SignIn() {
  const tutor = useSelector((state) => state.tutor);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const accessedPrivate = searchParams.get("private");
  const fromLocation = searchParams.get("from");
  const sessionExpired = searchParams.get("expired");
  const newTutor = searchParams.get("new");
  const logout = searchParams.get("logout");
  useEffect(() => {
    if (tutor.loggedIn) {
      navigate("/tutor");
    }
    if (newTutor) {
      toast.dismiss();
      toast.success("Welcome to Learnt Tutor! Please Login", {
        duration: 2000,
      });
    }
    if (logout) {
      toast.dismiss();
      toast.success("Missing You Already,Come Back Soon!", {
        icon: "😪",
        duration: 4000,
      });
    }
    if (accessedPrivate) {
      console.log(accessedPrivate);
      toast.dismiss();
      toast.error("Please Login to continue");
    }
    if (sessionExpired) {
      toast.dismiss();
      toast.error("Session timeout!,Please Login again");
    }
  }, []);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSignIn = (e) => {
    e.preventDefault();
    tutorSignInAPI(formValues)
      .then((response) => {
        console.log(response);
        console.log(response.data, "dwsxa");
        console.log(response.data.tutor, "dwcxzxsxa");
        localStorage.setItem("isTutorAuth", true);

        toast.success(
          `Hey ${response.data.tutor.name}, Welcome back To Learnt!`,
          {
            duration: 6000,
          }
        );

        dispatch(
          setTutor({
            ...response.data?.tutor,
            tutorId: response.data.tutor._id,
          })
        );
        if (fromLocation) {
          return navigate(fromLocation);
        }
        return navigate("..");
      })
      .catch((err) => {
        console.log(err);
        setError(err?.response?.data?.errors?.message);
      });
  };
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="flex nexa-font min-h-full flex-1 flex-col justify-center px-6 lg:px-8 h-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center">
            <Logo size="1.7" tutor={true} to="/tutor" />
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in and Explore
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" className="space-y-6" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>

              <div className="mt-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="block w-full nexa-font rounded-md border-0 py-1.5 px-1 text-grey-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                  className="block nexa-font w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <span className="text-red-400 text-center font-bold nexa-font">
                {error}
              </span>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleSignIn}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1 5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-xs text-gray-500">
            Ready to start exploring new perspectives?
            <Link
              to="../signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create An Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
