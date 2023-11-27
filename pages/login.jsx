"use client";
import { loginRequest } from "@/apiCalls";
import "@/app/globals.css";
import useUserStore from "@/stores/userStore";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { user, login, error, loading, registerAcc } = useUserStore();
  if (user && user.success) {
    const router = useRouter();
    router.replace("/");
  }
  const [registerForm, setRegisterForm] = useState(false);
  console.log(error);
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) =>
    registerForm ? await registerAcc(data) : await login(data);
  return (
    <div className="bg-gray-100 h-screen w-screen flex flex-col gap-4 items-center justify-center">
      <span className="text-blue-600 text-3xl font-mono italic">
        Job Portal
      </span>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {registerForm && (
          <>
            <input
              placeholder="Name"
              {...register("name", { required: true })}
              className="w-[300px] bg-blue-800 px-4 py-2 rounded-md shadow-md text-white placeholder:text-white"
            />
            {errors.name && (
              <span className="text-red-500 m-0 p-0 ">Name is required</span>
            )}
          </>
        )}
        <input
          placeholder="Email"
          {...register("email", { required: true })}
          className="w-[300px] bg-blue-800 px-4 py-2 rounded-md shadow-md text-white placeholder:text-white"
        />

        {errors.email && (
          <span className="text-red-500 m-0 p-0 ">Email is required</span>
        )}
        <input
          placeholder="password"
          type="password"
          {...register("password", { min: 6, required: true })}
          className="w-[300px] bg-blue-800 px-4 py-2 rounded-md shadow-md text-white placeholder:text-white"
        />

        {errors.password && (
          <span className="text-red-500 m-0 p-0 ">Password is required</span>
        )}
        {error && (
          <div className="text-red-600 font-bold">{error && error}</div>
        )}
        {user && (
          <div className="text-green-600 font-bold">Login Succefully</div>
        )}
        <input
          type="submit"
          className="w-[300px] border-blue-800 border-2 px-4 py-2 rounded-md shadow-md text-blue-800 hover:bg-blue-800 hover:text-white transition-all duration-300 cursor-pointer"
        />
      </form>
      <span
        className="text-blue-500 underline italic cursor-pointer"
        onClick={() => setRegisterForm(!registerForm)}
      >
        {registerForm ? "Already have an account" : "Have no account yet?"}
      </span>
    </div>
  );
};

export default Login;
