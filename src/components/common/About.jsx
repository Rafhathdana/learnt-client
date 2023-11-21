import Logo from "./Logo";

export default function About({ tutor = false }) {
  return (
    <>
      <section
        id="about"
        className="relative isolate overflow-hidden bg-white rounded-2xl px-6 py-12 sm:py-16 lg:px-8"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]  bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl"></div>
        <Logo size={2} tutor={tutor} />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            {tutor ? (
              <p className="nexa-font">
                "At Learnt, we're dedicated to fostering a culture of knowledge
                sharing, mentorship, and professional development – both for our
                tutors and our students. We believe that teaching is a lifelong
                journey, and we're committed to providing our tutors with the{" "}
                <span className="text-green-500">
                  tools and opportunities they need to offer the best
                  educational experiences
                </span>
                ."
              </p>
            ) : (
              <p className="nexa-font">
                "At Learnt, we're dedicated to fostering a culture of curiosity,
                creativity, and growth – both for our students and our team. We
                believe that learning is a lifelong journey, and we're committed
                to providing our students with the{" "}
                <span className="text-green-500">
                  highest-quality educational resources
                </span>
                ."
              </p>
            )}
          </blockquote>
          <figcaption className="mt-10">
            <img
              src="https://media.licdn.com/dms/image/D5635AQGbO-sqksdIMw/profile-framedphoto-shrink_400_400/0/1668833332857?e=1695582000&v=beta&t=oYVWwe6QQpP9S_jEmhv4Wg7vTmc7QzSU2D9Za69ubf4"
              alt="image"
              className="mx-auto h-14 w-14 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900 nexa-font">
                Mohammed Rafhath
              </div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO of LearnT </div>
            </div>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
