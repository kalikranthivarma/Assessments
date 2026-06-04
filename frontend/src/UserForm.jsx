import React, { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      age: "",
    });

    setSubmittedData(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          User Form
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block mb-1 font-medium">
              Age
            </label>
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
            >
              Reset
            </button>
          </div>
        </form>

        {/* Submitted Data */}
        {submittedData ? (
          <div className="mt-6 border-t pt-4">
            <h3 className="text-xl font-semibold mb-3">
              User Details
            </h3>

            <p>
              <strong>Name:</strong>{" "}
              {submittedData.name}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {submittedData.email}
            </p>

            <p>
              <strong>Age:</strong>{" "}
              {submittedData.age}
            </p>
          </div>
        ) : (
          <p className="mt-4 text-center text-gray-500">
            No User Data Submitted Yet
          </p>
        )}
      </div>
    </div>
  );
}