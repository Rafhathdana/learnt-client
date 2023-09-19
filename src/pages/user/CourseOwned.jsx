import { useEffect, useState } from "react";
import ProfileLayout from "../../components/common/ProfileLayout";
import PageInfo from "../../components/common/PageInfo";
import Loading from "../../components/common/Loading";
import { Badge, Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { getUserEnrolledCoursesAPI } from "../../api/user";

export default function CourseOwned() {
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getUserEnrolledCoursesAPI()
      .then(({ data }) => {
        console.log(data);
        setCourses(data.data);
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  }, []);
  return (
    <ProfileLayout>
      <PageInfo pageName="Courses" />
      <div>
        <div className="mx-auto max-w-2xl relative text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Manage Courses
          </h2>
          <p className="mt-2 text-lg leaading-8 text-gray-600">
            View Courses You Have Enrolled
          </p>
        </div>
        <div className="mt-16">
          {isLoading ? (
            <Loading />
          ) : courses.length ? (
            <>
              <div className="flex flex-col gap-3">
                {courses.map((course) => (
                  <div
                    key={course._id}
                    className="min-w-2xl border rounded-xl overflow-hidden h-27 flex justify-between"
                  >
                    <div className="flex items-center">
                      <img
                        src={course.thumbnailURL}
                        alt="image"
                        className="w-40 object-fill rounded-sm"
                        style={{ height: "-webkit-fill-available" }}
                      />
                      <div className="ml-5 first-capitalize">
                        <h1 className="text-xl capitalize">{course.title}</h1>
                        <h1 className="text-sm">{course.tagline}</h1>
                        <div className="flex mt-1 gap-2">
                          <Badge color={"warning"} className="w-fit capitalize">
                            {course.category}
                          </Badge>
                          <Badge className="w-fit float-left capitalize">
                            {course.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mr-5">
                      <Button
                        onClick={() =>
                          navigate(`/courses/enrolled/${course._id}`)
                        }
                      >
                        View Course
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <p>you havent enrolled for any courses yet</p>
            </>
          )}
        </div>
      </div>
    </ProfileLayout>
  );
}
