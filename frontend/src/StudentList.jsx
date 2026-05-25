import React, { useState } from "react";

export default function StudentList() {
  const [search, setSearch] = useState("");

  const students = [
    {
      id: 1,
      name: "Akhil Kumar",
      age: 22,
      city: "Vijayawada",
      gender: "Male",
      contact: "9876543210",
      email: "akhil.kumar@gmail.com",
      fatherName: "Ramesh Kumar",
      branch: "CSE",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Sneha Reddy",
      age: 21,
      city: "Hyderabad",
      gender: "Female",
      contact: "9123456780",
      email: "sneha.reddy@gmail.com",
      fatherName: "Prasad Reddy",
      branch: "ECE",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      id: 3,
      name: "Rahul Sharma",
      age: 23,
      city: "Bangalore",
      gender: "Male",
      contact: "9988776655",
      email: "rahul.sharma@gmail.com",
      fatherName: "Suresh Sharma",
      branch: "IT",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      name: "Divya Patel",
      age: 22,
      city: "Ahmedabad",
      gender: "Female",
      contact: "9012345678",
      email: "divya.patel@gmail.com",
      fatherName: "Mahesh Patel",
      branch: "CSE",
      image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      id: 5,
      name: "Kiran Kumar",
      age: 24,
      city: "Chennai",
      gender: "Male",
      contact: "9090909090",
      email: "kiran.kumar@gmail.com",
      fatherName: "Ravi Kumar",
      branch: "EEE",
      image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      id: 6,
      name: "Meena Iyer",
      age: 21,
      city: "Chennai",
      gender: "Female",
      contact: "9871234560",
      email: "meena.iyer@gmail.com",
      fatherName: "Srinivas Iyer",
      branch: "CSE",
      image: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
      id: 7,
      name: "Arjun Verma",
      age: 23,
      city: "Delhi",
      gender: "Male",
      contact: "8887776665",
      email: "arjun.verma@gmail.com",
      fatherName: "Rajesh Verma",
      branch: "Mechanical",
      image: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      id: 8,
      name: "Pooja Singh",
      age: 22,
      city: "Lucknow",
      gender: "Female",
      contact: "9011223344",
      email: "pooja.singh@gmail.com",
      fatherName: "Anil Singh",
      branch: "Civil",
      image: "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
      id: 9,
      name: "Rohit Gupta",
      age: 24,
      city: "Mumbai",
      gender: "Male",
      contact: "9898989898",
      email: "rohit.gupta@gmail.com",
      fatherName: "Vinod Gupta",
      branch: "IT",
      image: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      id: 10,
      name: "Anjali Das",
      age: 21,
      city: "Kolkata",
      gender: "Female",
      contact: "9001122334",
      email: "anjali.das@gmail.com",
      fatherName: "Subhash Das",
      branch: "CSE",
      image: "https://randomuser.me/api/portraits/women/10.jpg"
    },
    {
      id: 11,
      name: "Vikram Rao",
      age: 23,
      city: "Hyderabad",
      gender: "Male",
      contact: "9123987654",
      email: "vikram.rao@gmail.com",
      fatherName: "Krishna Rao",
      branch: "ECE",
      image: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      id: 12,
      name: "Neha Kapoor",
      age: 22,
      city: "Delhi",
      gender: "Female",
      contact: "9345678901",
      email: "neha.kapoor@gmail.com",
      fatherName: "Raj Kapoor",
      branch: "MBA",
      image: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      id: 13,
      name: "Sandeep Yadav",
      age: 24,
      city: "Noida",
      gender: "Male",
      contact: "9876501234",
      email: "sandeep.yadav@gmail.com",
      fatherName: "Mahavir Yadav",
      branch: "Civil",
      image: "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
      id: 14,
      name: "Kavya Nair",
      age: 21,
      city: "Kochi",
      gender: "Female",
      contact: "9988123456",
      email: "kavya.nair@gmail.com",
      fatherName: "Raghavan Nair",
      branch: "CSE",
      image: "https://randomuser.me/api/portraits/women/14.jpg"
    },
    {
      id: 15,
      name: "Manoj Tiwari",
      age: 23,
      city: "Patna",
      gender: "Male",
      contact: "9000090000",
      email: "manoj.tiwari@gmail.com",
      fatherName: "Harish Tiwari",
      branch: "Mechanical",
      image: "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
      id: 16,
      name: "Ritika Jain",
      age: 22,
      city: "Jaipur",
      gender: "Female",
      contact: "9111222233",
      email: "ritika.jain@gmail.com",
      fatherName: "Amit Jain",
      branch: "Commerce",
      image: "https://randomuser.me/api/portraits/women/16.jpg"
    },
    {
      id: 17,
      name: "Harish Kumar",
      age: 24,
      city: "Chandigarh",
      gender: "Male",
      contact: "9887766554",
      email: "harish.kumar@gmail.com",
      fatherName: "Dinesh Kumar",
      branch: "EEE",
      image: "https://randomuser.me/api/portraits/men/17.jpg"
    },
    {
      id: 18,
      name: "Priya Sharma",
      age: 21,
      city: "Bhopal",
      gender: "Female",
      contact: "9776655443",
      email: "priya.sharma@gmail.com",
      fatherName: "Rakesh Sharma",
      branch: "Pharmacy",
      image: "https://randomuser.me/api/portraits/women/18.jpg"
    },
    {
      id: 19,
      name: "Aditya Singh",
      age: 23,
      city: "Kanpur",
      gender: "Male",
      contact: "9665544332",
      email: "aditya.singh@gmail.com",
      fatherName: "Suraj Singh",
      branch: "IT",
      image: "https://randomuser.me/api/portraits/men/19.jpg"
    },
    {
      id: 20,
      name: "Shreya Ghosh",
      age: 22,
      city: "Kolkata",
      gender: "Female",
      contact: "9554433221",
      email: "shreya.ghosh@gmail.com",
      fatherName: "Bikash Ghosh",
      branch: "Arts",
      image: "https://randomuser.me/api/portraits/women/20.jpg"
    }
  ];

  const filteredStudents = students.filter((student) =>
    Object.values(student).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Card Wrapper */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-7 text-center">
            <h1 className="text-3xl font-semibold text-white tracking-tight">
              Student Management System
            </h1>
            <p className="text-blue-100 mt-2 text-sm">
              Search students by any field
            </p>
          </div>

          {/* Search */}
          <div className="px-6 py-5 border-b border-gray-100">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search by Name, City, Gender, Branch, Email, Contact..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full
                  pl-12
                  pr-5
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  text-sm
                  text-gray-800
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-indigo-400
                  focus:border-indigo-400
                  focus:bg-white
                  transition-all
                  duration-200
                "
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">

              <thead>
                <tr className="bg-slate-800 text-slate-400 text-xs uppercase tracking-wider">
                  <th className="px-5 py-4 text-left font-medium">Photo</th>
                  <th className="px-5 py-4 text-left font-medium">ID</th>
                  <th className="px-5 py-4 text-left font-medium">Name</th>
                  <th className="px-5 py-4 text-left font-medium">Age</th>
                  <th className="px-5 py-4 text-left font-medium">City</th>
                  <th className="px-5 py-4 text-left font-medium">Gender</th>
                  <th className="px-5 py-4 text-left font-medium">Contact</th>
                  <th className="px-5 py-4 text-left font-medium">Email</th>
                  <th className="px-5 py-4 text-left font-medium">Father Name</th>
                  <th className="px-5 py-4 text-left font-medium">Branch</th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-100">
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <tr
                      key={student.id}
                      className="hover:bg-blue-50 transition-colors duration-150"
                    >
                      {/* Photo */}
                      <td className="px-5 py-4">
                        <img
                          src={student.image}
                          alt={student.name}
                          className="w-11 h-11 rounded-full object-cover border-2 border-indigo-400 shadow-sm"
                        />
                      </td>

                      {/* ID */}
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-violet-100 text-violet-700 text-xs font-semibold">
                          {student.id}
                        </span>
                      </td>

                      {/* Name */}
                      <td className="px-5 py-4">
                        <span className="font-semibold text-blue-600 text-sm whitespace-nowrap">
                          {student.name}
                        </span>
                      </td>

                      {/* Age */}
                      <td className="px-5 py-4 text-sm text-gray-700">
                        {student.age}
                      </td>

                      {/* City */}
                      <td className="px-5 py-4 text-sm text-gray-700 whitespace-nowrap">
                        {student.city}
                      </td>

                      {/* Gender */}
                      <td className="px-5 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                            student.gender === "Male"
                              ? "bg-sky-100 text-sky-700"
                              : "bg-pink-100 text-pink-700"
                          }`}
                        >
                          {student.gender}
                        </span>
                      </td>

                      {/* Contact */}
                      <td className="px-5 py-4 text-sm text-gray-600 tabular-nums whitespace-nowrap">
                        {student.contact}
                      </td>

                      {/* Email */}
                      <td className="px-5 py-4 text-sm text-indigo-500 whitespace-nowrap">
                        {student.email}
                      </td>

                      {/* Father Name */}
                      <td className="px-5 py-4 text-sm text-gray-700 whitespace-nowrap">
                        {student.fatherName}
                      </td>

                      {/* Branch */}
                      <td className="px-5 py-4">
                        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold whitespace-nowrap">
                          {student.branch}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="10"
                      className="text-center py-14 text-red-500 text-base font-semibold"
                    >
                      No Students Found
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>

          {/* Footer Count Bar */}
          <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Showing{" "}
            <span className="font-semibold text-gray-800">
              {filteredStudents.length}
            </span>{" "}
            of {students.length} students
          </div>

        </div>
      </div>
    </div>
  );
}