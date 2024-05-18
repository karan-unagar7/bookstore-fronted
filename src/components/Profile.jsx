import axios from "axios";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function Profile({ isOpen, onClose }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    try {
      if (isOpen) {
        const fetchProfileData = async () => {
          const response = await axios.get(
            "http://localhost:3001/api/v1/user/getuser",
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          setUser(response.data.data);
        };
        fetchProfileData();
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  }, [isOpen]);
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {user ? (
          
          <div>
            <h2 className="text-xl font-bold mb-4">Profile</h2>
            <div className="flex items-center mb-4">
              <img
                src={user.image}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-xl">
                  <span className="font-bold">Name:</span>{" "}
                  {user.name}
                </p>
                <hr />
                <p className="text-xl">
                  <span className="font-bold">Email:</span>{" "}
                  {user.email}
                </p>
                <hr />
                <p className="text-xl">
                  <span className="font-bold">Gender:</span>{" "}
                  {user.gender}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
