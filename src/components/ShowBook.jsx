import { useState, useEffect } from "react";
import axios from "axios";

const ShowBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/v1/book/getall", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setBooks(response.data.AllBook);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleButtonClick = (action) => {
    alert(`Button clicked: ${action}`);
  };

  const handleUpdateByName = ()=>{
    alert('hello')
  }

  if (loading) {
    return <div className="text-center my-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center my-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl text-center font-bold mb-8">Books List</h1>
      <div className="flex flex-wrap justify-center mb-8">
        <button
          onClick={handleUpdateByName}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Update By Name
        </button>
        <button
          onClick={() => handleButtonClick("Edit Selected Book")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Update By Name And Author
        </button>
        <button
          onClick={() => handleButtonClick("Delete Selected Book")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Delete By Book Id
        </button>
        <button
          onClick={() => handleButtonClick("View Book Details")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Delete By Book Name
        </button>
        <button
          onClick={() => handleButtonClick("Export Books List")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Delete By Book Desc And Author
        </button>
        <button
          onClick={() => handleButtonClick("Import Books List")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Delete By Book Name and Category
        </button>
        <button
          onClick={() => handleButtonClick("Search Books")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Show All
        </button>
        <button
          onClick={() => handleButtonClick("Filter Books")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Show Book By Id
        </button>
        <button
          onClick={() => handleButtonClick("Sort Books")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Show Book By Name
        </button>
        <button
          onClick={() => handleButtonClick("Refresh List")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Show Book By Name & Author
        </button>
        <button
          onClick={() => handleButtonClick("Refresh List")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Show Book pages More then 100
        </button>
        <button
          onClick={() => handleButtonClick("Refresh List")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
         Show Book pages Less then 90 & More then 25
        </button>
        <button
          onClick={() => handleButtonClick("Refresh List")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Show Book pages Less then 90 & More then 25 But not 80
        </button>
        <button
          onClick={() => handleButtonClick("Refresh List")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Show Book pages Zero
        </button>
        <button
          onClick={() => handleButtonClick("Refresh List")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
           Show Book Released Year 2015 and 2001
        </button>
        <button
          onClick={() => handleButtonClick("Refresh List")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Sort By Book Name
        </button>
        <button
          onClick={() => handleButtonClick("Refresh List")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Sort By Book Price
        </button>
        <button
          onClick={() => handleButtonClick("Refresh List")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Sort By Book Author
        </button>
        <button
          onClick={() => handleButtonClick("Refresh List")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Sort By Book No_of_Pages
        </button>
        <button
          onClick={() => handleButtonClick("Refresh List")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
           Sort By Book Category
        </button>
        <button
          onClick={() => handleButtonClick("Refresh List")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
           Sort By Book Released Year
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-gray-100 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Book Id
              </th>
              <th className="py-3 px-6 bg-gray-100 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="py-3 px-6 bg-gray-100 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Description
              </th>
              <th className="py-3 px-6 bg-gray-100 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Number of Pages
              </th>
              <th className="py-3 px-6 bg-gray-100 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Author
              </th>
              <th className="py-3 px-6 bg-gray-100 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Category
              </th>
              <th className="py-3 px-6 bg-gray-100 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Price
              </th>
              <th className="py-3 px-6 bg-gray-100 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Released Year
              </th>
            </tr>
          </thead>
          <tbody>
            {books.length === 0 ? (
              <tr>
                <td colSpan="8" className="py-3 px-6 text-center text-2xl border-b border-gray-200">
                  No data found
                </td>
              </tr>
            ) : (
              books.map((book) => (
                <tr
                  key={book.id}
                  className="hover:bg-slate-200 transition-colors duration-200"
                >
                  <td className="py-3 px-6 border-b border-gray-200">
                    {book.id}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200">
                    {book.name}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200">
                    {book.description}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200">
                    {book.no_of_pages}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200">
                    {book.author}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200">
                    {book.category}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200">
                    {book.price}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200">
                    {book.released_year}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowBooks;
