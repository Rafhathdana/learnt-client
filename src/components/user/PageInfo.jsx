import { Link } from "react-router-dom";

const PageInfo = ({ pageName }) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md-2 font-semibold text-primary dark:text-white">
        {/* {pageName} */}
      </h2>
      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link to="/user">Home</Link>
          </li>
          <li className="text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};
export default PageInfo;
