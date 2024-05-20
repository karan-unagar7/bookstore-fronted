import { useState } from "react";

// eslint-disable-next-line react/prop-types
const BookForm = ({ book, onClose, onUpdate }) => {
  const [updatedBook, setUpdatedBook] = useState({ ...book });

  const handleInputChange = (e) => {
    setUpdatedBook({ ...updatedBook, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await onUpdate(updatedBook);
      onClose();
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Book Details</h2>
          <button
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
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
        <form onSubmit={handleUpdate}>
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 px-2 mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors duration-200"
                id="name"
                type="text"
                name="name"
                value={updatedBook.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-1/2 px-2 mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <input
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors duration-200"
                id="description"
                type="text"
                name="description"
                value={updatedBook.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-1/2 px-2 mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="description"
              >
                No Of Pages
              </label>
              <input
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors duration-200"
                id="description"
                type="text"
                name="no_of_pages"
                value={updatedBook.no_of_pages}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-1/2 px-2 mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="description"
              >
                Author
              </label>
              <input
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors duration-200"
                id="description"
                type="text"
                name="author"
                value={updatedBook.author}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-1/2 px-2 mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="description"
              >
                Category
              </label>
              <input
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors duration-200"
                id="description"
                type="text"
                name="category"
                value={updatedBook.category}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-1/2 px-2 mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="description"
              >
                Price
              </label>
              <input
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors duration-200"
                id="description"
                type="text"
                name="price"
                value={updatedBook.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-1/2 px-2 mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="description"
              >
                Released Year
              </label>
              <input
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors duration-200"
                id="description"
                type="text"
                name="released_year"
                value={updatedBook.released_year}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
