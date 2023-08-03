import PropTypes from "prop-types";
export default function SectionTitle({
  title = "No Title",
  description = "",
  tutor = false,
}) {
  return (
    <>
      <h1
        className={`nexa-font text-start ml-16 text-4xl pt-10 font-black ${
          tutor ? "text-amber-700" : "text-blue-700"
        }`}
      >
        {title}
      </h1>
      <span
        className={`text-gray-400 nexa-font text-start ml-16 text-sm pt-3 font-black`}
      >
        {description}
      </span>
    </>
  );
}
SectionTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tutor: PropTypes.bool,
};
