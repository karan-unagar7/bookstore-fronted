import axios from "axios";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function Profile({ isOpen, onClose }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (isOpen) {
          const response = await axios.get(
            "http://localhost:3001/api/v1/user/getuser",
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          setUser(response.data.data);
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };
    fetchProfileData();
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      } bg-black bg-opacity-50`}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg h-auto">
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
            <h2 className="text-2xl font-bold mb-4 text-center">Profile</h2>
            <div className="flex flex-col items-center mb-4">
              <img
                src={user.image}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover mb-4 shadow-md border-2 border-gray-200"
              />
              <div className="text-center">
                <p className="text-xl mb-2">
                  <span className="font-bold">Name:</span> {user.name}
                </p>
                <hr className="border-t border-gray-300 my-2" />
                <p className="text-xl mb-2">
                  <span className="font-bold">Email:</span> {user.email}
                </p>
                <hr className="border-t border-gray-300 my-2" />
                <p className="text-xl mb-2">
                  <span className="font-bold">Gender:</span> {user.gender}
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
