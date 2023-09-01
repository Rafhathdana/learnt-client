import timeAgo from "../../utils/timeAgo";
import PropTypes from "prop-types";

const TableOne = ({ tableData, categories }) => {
  return (
    <div className="rounded-sm sm:rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        {tableData.name}
      </h4>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              {tableData.head[0]}
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              {tableData.head[1]}
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              {tableData.head[2]}
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              {tableData.head[3]}
            </h5>
          </div>
        </div>
        <div>
          {categories.map((category) => (
            <div
              key={category._id}
              className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-4"
            >
              <div className="flex items-center gap-3 p-2 xl:p-5">
                <div className="flex-shrink-0">
                  <p className="text-black nexa-font dark:text-white font-semibold capitalize">
                    {category.title}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{category.count}</p>
              </div>
              <div className="flex items-center flex-col justify-center p-2.5 xl:p-5">
                <p className="font-medium">
                  {new Date(category.createdAt).toDateString()}
                </p>
                <p className="text-gray-500">
                  {timeAgo(category.createdAt)} Ago
                </p>
              </div>
              <div className="hidden p-2.5 sm:block xl:py-3">
                <p className="text-black dark:text-white tracking-tight">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TableOne;
TableOne.propTypes = {
  tableData: PropTypes.object,
  categories: PropTypes.object,
};
