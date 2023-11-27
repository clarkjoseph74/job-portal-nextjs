"use client";
import useUserStore from "@/stores/userStore";
import React, { useEffect } from "react";

const Hero = () => {
  const { getUserData, user } = useUserStore();
  const fetchData = async (user) => {
    await getUserData();
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(user);
  return (
    <div className="mx-4 from-blue-800 h-[130px] bg-gradient-to-l to-blue-500 rounded-md flex flex-row items-center justify-between p-10 w-5/6 transition-all duration-150 shadow-lg">
      <div className=" flex-col justify-center">
        <h2 className="text-white text-3xl font-bold ">
          Looking for a new opportunities?
        </h2>
        <p className="text-white font-light">Browse our latest job openings</p>
      </div>
      <div className="text-3xl text-blue-400 font-mono hover:text-blue-200 transition-all duration-500 hover:border-solid  border-none">
        <p>Welcome, {user && user.name}</p>
      </div>
    </div>
  );
};

export default Hero;
