"use client";
import React from "react";
import { useState, useEffect } from "react";

const students = [
  { firstName: "Mike", lastName: "Smith", dob: "14-Oct-2005", grade: "10" },
  { firstName: "Jack", lastName: "Johnson", dob: "20-Jul-204", grade: "9" },
  { firstName: "Kitty", lastName: "Wong", dob: "05-Jun-2004", grade: "9" },
  { firstName: "John", lastName: "Do", dob: "14-Mar-2005", grade: "10" },
  { firstName: "Owen", lastName: "Jones", dob: "01-Jan-2005", grade: "11" },
];

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  if (students.length === 0) {
    <h2 className="text-xl font-semibold text-center">Student List</h2>;
    return <p className="text-center">No students found.</p>;
  } else {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold text-center">Student List</h2>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4 mb-4">
          {students.map((student) => (
            <li
              key={student.id}
              className="p-4 bg-sky-100 hover:bg-sky-200 rounded-lg shadow-inner"
            >
              <p>
                Name: {student.firstName} {student.lastName}
              </p>
              <p>Date of Birth: {student.dob}</p>
              <p>Grade: {student.grade}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default StudentList;
