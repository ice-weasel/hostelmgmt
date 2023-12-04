"use client"

import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { useState } from "react";

interface StudentDetails {
  firstname: string;
}

const getDetails = async (res: NextApiResponse) => {
  try {
    const response = await fetch("/api/student", {
      method: "GET", // Specify the HTTP method
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch student");
    }
    const data = await response.json();
    console.log("Student data:", data);
  } catch (error) {
    console.error("Error fetching student:", error);
  }
};
export default  function Home() {

  
  const [formData, setFormData] = useState<StudentDetails>({
    firstname: "",
  });

 

  const [error, setError] = useState([""]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("api/student", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          firstname: formData.firstname,
        }),
      });
      const { msg } = await res.json();
      setError(msg);
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <div className="bg-white">
      <div className="flex flex-col bg-rounded mt-7">
        <p className="text-3xl text-center">Create Student</p>
        <div className="flex flex-col mt-7">
          <form
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-rows justify-evenly"
          >
            <div className="w-72">
              <div className="relative w-full min-w-[200px] h-10">
                <input
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=""
                  name="firstname"
                  value={formData.firstname}
                  type="text"
                  onChange={handleChange}
                  id="firstname"
                />
                <label
                  className="flex w-full h-full select-none pointer-events-none 
                    absolute left-0 font-normal !overflow-visible 
                    truncate peer-placeholder-shown:text-blue-gray-500 
                    leading-tight peer-focus:leading-tight 
                    peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 
                    transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] ]
                    before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px]
                    before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t
                    peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none 
                    before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow 
                    after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 
                    peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t 
                    peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none 
                    after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] 
                    text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 
                    after:border-blue-gray-200 peer-focus:after:!border-gray-900"
                >
                  First Name
                </label>
              </div>
            </div>

            <div className="w-72">
              <div className="relative w-full min-w-[200px] h-10">
                <input
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                />
                <label
                  className="flex w-full h-full select-none pointer-events-none 
                    absolute left-0 font-normal !overflow-visible 
                    truncate peer-placeholder-shown:text-blue-gray-500 
                    leading-tight peer-focus:leading-tight 
                    peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 
                    transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] ]
                    before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px]
                    before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t
                    peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none 
                    before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow 
                    after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 
                    peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t 
                    peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none 
                    after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] 
                    text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 
                    after:border-blue-gray-200 peer-focus:after:!border-gray-900"
                >
                  Last Name
                </label>
              </div>
            </div>
            <button className="text-black" type="submit">
              Submit
            </button>
          </form>
          {error && <p>{error}</p>}
        </div>

        <div className="flex justify-evenly mt-5 items-center flex-rows p-4 bg-slate-300 hover:shadow-lg z-auto shadow-sm rounded-md"></div>
      </div>
    </div>
  );
}
