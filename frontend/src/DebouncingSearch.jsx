import React, { useState, useEffect, useRef } from "react";

export default function SearchUsers() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const requestIdRef = useRef(0);

  useEffect(() => {
    if (!query.trim()) {
      setUsers([]);
      setError("");
      return;
    }

    const timer = setTimeout(async () => {
      const currentRequestId = ++requestIdRef.current;

      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?name_like=${query}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        if (currentRequestId === requestIdRef.current) {
          setUsers(data);
        }
      } catch (err) {
        if (currentRequestId === requestIdRef.current) {
          setError(err.message);
          setUsers([]);
        }
      } finally {
        if (currentRequestId === requestIdRef.current) {
          setLoading(false);
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6">
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          User Search
        </h2>

        <input
          type="text"
          placeholder="Search User"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {loading && (
          <p className="text-blue-600 text-center mt-4 font-medium">
            Loading...
          </p>
        )}

        {error && (
          <p className="text-red-500 text-center mt-4">
            {error}
          </p>
        )}

        {!loading && query && users.length === 0 && !error && (
          <p className="text-gray-500 text-center mt-4">
            No Results Found
          </p>
        )}

        <ul className="mt-6 space-y-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-blue-50 transition"
            >
              <h3 className="font-semibold text-gray-800">
                {user.name}
              </h3>
              <p className="text-sm text-gray-500">
                {user.email}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}