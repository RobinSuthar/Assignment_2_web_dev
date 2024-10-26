"use client";

import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    grade: "",
  });
  
  

  return (
    <form className="p-6 bg-slate-200 shadow-inner rounded-lg flex flex-col items-center text-center w-full max-w-md">
      <h2 className="text-xl font-bold mb-4 text-center ">Add New Student</h2>
      <div className="space-y-4 w-full">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          className="p-2 border rounded w-full"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          className="p-2 border rounded w-full"
          required
        />
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={formData.dob}
          className="p-2 border rounded w-full"
          required
        />
        <input
          type="number"
          name="grade"
          placeholder="Grade"
          value={formData.grade}
          className="p-2 border rounded w-full"
          required
        />
        <div className="">
        <button type="submit" className="bg-sky-700 hover:bg-sky-900 ocus:border-transparent text-white p-2 rounded mt-4 w-full ">
          Add Student
        </button>
        </div>
        </div>
    </form>
  );
};

export default Form;
