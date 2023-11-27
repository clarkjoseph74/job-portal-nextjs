import React from "react";

const JobWidget = ({ position, desc, company, location, workType, status }) => {
  return (
    <div className="border-2 border-blue-900 w-full rounded-sm hover:bg-gradient-to-br hover:from-gray-200 hover:to-blue-100 hover:rounded-lg hover:shadow-lg hover:border-blue-500 transition-all dura">
      <div className="flex flex-col m-2">
        <span className="text-2xl text-blue-600 font-bold italic underline">
          {" "}
          {position}
        </span>
        <span className="line-clamp-3 font-light ">{desc}</span>
        <div>
          <span className="text-blue-600">Campany : </span>
          <span>{company}</span>
        </div>
        <div>
          <span className="text-blue-600">Location : </span>
          <span>{location}</span>
        </div>
        <div>
          <span className="text-blue-600">Type : </span>
          <span>{workType}</span>
        </div>
        <div>
          <span className="text-blue-600">Status : </span>
          <span
            className={
              status === "pending"
                ? "bg-orange-500 rounded-full px-2 py-[2px] uppercase text-white font-bold"
                : status === "interview"
                ? "bg-green-500 rounded-full px-2 py-[2px] uppercase text-white font-bold"
                : "bg-red-500 rounded-full px-2 py-[2px] uppercase text-white font-bold"
            }
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobWidget;
