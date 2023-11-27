"use client";
import useJobsStore from "@/stores/jobStore";
import JobWidget from "./jobWidget";
import { useEffect, useState } from "react";

const JobSection = () => {
  const { fetchData, jobs, loading, error } = useJobsStore();
  const errorMessage = error && error.response.data.err;
  console.log(jobs && jobs);
  const [pageCount, setPageCount] = useState(1);
  console.log(loading);
  console.log(error);
  const getJobData = async (page) => {
    await fetchData(page);
  };
  useEffect(() => {
    getJobData(pageCount);
  }, [pageCount]);
  return (
    <div className="h-full w-5/6 m-4 flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-xl font-semibold font-mono">Latest Jobs</h3>
        <div className="flex flex-row gap-4 items-center justify-center]">
          <button
            className="text-blue-600 font-bold disabled:text-gray-500"
            onClick={() => setPageCount(pageCount - 1)}
            disabled={pageCount === 1 ? true : false}
          >{`< Previous`}</button>
          <span className="text--400 italic font-bold ">
            Page No. {pageCount}
          </span>
          <button
            className="text-blue-600 font-bold  disabled:text-gray-500"
            onClick={() => setPageCount(pageCount + 1)}
            disabled={pageCount === (jobs ? jobs.numOfPage : 1) ? true : false}
          >{`Next >`}</button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-rows-2 gap-4">
        {loading ? (
          <div>Loading ...</div>
        ) : error ? (
          <div>Error : {errorMessage}</div>
        ) : (
          jobs &&
          jobs.jobs.map((job) => (
            <JobWidget
              position={job.position}
              company={job.company}
              desc={job.desc}
              location={job.workLocation}
              status={job.status}
              workType={job.workType}
              key={job._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default JobSection;
