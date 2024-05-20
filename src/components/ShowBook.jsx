import { useState, useEffect } from "react";
import axios from "axios";
import BookForm from "./BookForm";
import { toast, ToastContainer } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ShowBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [bookDesc, setBookDesc] = useState("");
  const [category, setCategory] = useState("");
  const [bookId, setBookId] = useState("");

  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(null);

  const [isNameAndAuthor, setIsNameAndAuthor] = useState(false);

  const [isBookName, setIsBookName] = useState(false);
  const [isDescAndAuthor, setIsDescAndAuthor] = useState(false);
  const [isBookNameAndCategory, setIsBookNameAndCategory] = useState(false);

  const [isShowBookId, setIsShowBookId] = useState(false);

  const [order, setOrder] = useState(true);

  const [currentPage,setCurrentPage] = useState(1);
  const [totalPages,setTotalPages] = useState(1);
  const limit = 5;

  useEffect(() => {
    setTimeout(() => {
      const fetchBooks = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/api/v1/book/getall?page=${currentPage}&limit=${limit}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          setBooks(response.data.AllBook);
          setTotalPages(Math.ceil(response.data.totalBooks / limit));
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchBooks();
    }, 500);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleUpdateByNameAndAuthor = () => {
    setModal1(true);
    setIsNameAndAuthor(true);
  };

  const handleUpdateByName = () => {
    setModal1(true);
  };

  const handleDeleteById = () => {
    setModal2(true);
  };

  const handleDeleteByName = () => {
    setModal2(true);
    setIsBookName(true);
  };

  const handleDeleteByDescAndAuthor = () => {
    setModal2(true);
    setIsDescAndAuthor(true);
  };

  const handleDeleteByNameAndCategory = () => {
    setModal2(true);
    setIsBookNameAndCategory(true);
  };

  const handleCloseModal = () => {
    setModal1(false);
    setModal2(false);
    setModal3(false);
    setBookName("");
    setBookId("");
    setAuthorName("");
    setBookDesc("");
    setCategory("");
    setIsNameAndAuthor(false);
    setIsBookName(false);
    setIsDescAndAuthor(false);
    setIsBookNameAndCategory(false);
    setIsShowBookId(false);
  };

  const handleUpdateSubmit = async (e) => {
    try {
      let url = "";
      if (bookName && !authorName) {
        url = `http://localhost:3001/api/v1/book/getOne?bookName=${bookName}`;
      } else if (bookName && authorName) {
        url = `http://localhost:3001/api/v1/book/getOne?bookName=${bookName}&authorName=${authorName}`;
      }
      console.log(url);
      e.preventDefault();
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success(response.data.message);
      setFormData(response.data.Book);
      setShowForm(true);
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data.message);
    } finally {
      setModal1(false);
      setBookName("")
      setAuthorName("");
      setModal1(false);
      setIsBookName(false);
      setIsNameAndAuthor(false);
    }
  };

  const handleDeleteSubmit = async (e) => {
    try {
      e.preventDefault();
      let url = "";
      if (bookName && !authorName && !bookDesc && !category) {
        url = `http://localhost:3001/api/v1/book/delete?bookName=${bookName}`;
      } else if (bookDesc && authorName) {
        url = `http://localhost:3001/api/v1/book/delete?bookDesc=${bookDesc}&authorName=${authorName}`;
      } else if (bookName && category) {
        url = `http://localhost:3001/api/v1/book/delete?bookName=${bookName}&category=${category}`;
      } else {
        url = `http://localhost:3001/api/v1/book/delete?bookId=${bookId}`;
      }
      const response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success(response.data.message);
      setModal2(false);
      setIsBookName(false);
      setIsBookNameAndCategory(false);
      setIsDescAndAuthor(false);
      setTimeout(() => window.location.reload(), 500);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      setModal2(false);
      setBookId("")
      setBookName("")
      setBookDesc("")
      setAuthorName("")
      setCategory("")
    }
  };

  const handleUpdate = async (updatedBook) => {
    try {
      console.log(updatedBook);
      const response = await axios.put(
        `http://localhost:3001/api/v1/book/update/${[updatedBook][0].id}`,
        updatedBook,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBooks([updatedBook]);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleShowData = async (e) => {
    e.preventDefault();
    let url = "";
    if (bookId) {
      url = `http://localhost:3001/api/v1/book/getAll?bookId=${bookId}`;
    } else if (bookName && authorName) {
      url = `http://localhost:3001/api/v1/book/getAll?bookName=${bookName}&authorName=${authorName}`;
    } else if (bookName && !authorName) {
      url = `http://localhost:3001/api/v1/book/getAll?bookName=${bookName}`;
    } else {
      url = `http://localhost:3001/api/v1/book/getAll`;
    }
    console.log(url);
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBooks(response.data.AllBook);
      setModal3(false);
      setBookId("");
      setBookName("");
      setAuthorName("");
      setIsShowBookId(false);
      setIsBookName(false);
      toast.success(response.data.message);
    } catch (error) {
      // console.log(error.response.data.message);
      setBooks([]);
      setIsShowBookId(false);
      setIsBookName(false);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
      setModal3(false);
    }
  };

  const handleShowById = () => {
    setModal3(true);
    setIsShowBookId(true);
  };

  const handleShowByName = () => {
    setModal3(true);
    setIsBookName(true);
  };

  const handleShowByNameAndAuthor = () => {
    setModal3(true);
  };

  const handleShowByMoreThan100 = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/book/getAll?pages_gt=100`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBooks(response.data.AllBook);
      toast.success(response.data.message);
    } catch (error) {
      setBooks([]);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleShowByLess90More25 = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/book/getAll?pages_lt=90&pages_gt=25`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBooks(response.data.AllBook);
      toast.success(response.data.message);
    } catch (error) {
      setBooks([]);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleShowByLess90More25Ne80 = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/book/getAll?pages_lt=90&pages_gt=25&pages_ne=80`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBooks(response.data.AllBook);
      toast.success(response.data.message);
    } catch (error) {
      setBooks([]);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleShowByPage0 = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/book/getAll?pages_eq=0`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBooks(response.data.AllBook);
      toast.success(response.data.message);
    } catch (error) {
      setBooks([]);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleShowByReleasedYear = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/book/getAll?rel_year1=2001&rel_year2=2015`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBooks(response.data.AllBook);
      toast.success(response.data.message);
    } catch (error) {
      setBooks([]);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSorting = async (sortFeild) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/book/getAll?order=${order}&sort=${sortFeild}`,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBooks(response.data.AllBook);
      toast.success(
        `${order ? "Ascending" : "Descending"} order by ${sortFeild}`
      );

      setOrder((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (error) {
    return <div className="text-center my-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto my-8">
      <ToastContainer />
      <h1 className="text-3xl text-center font-bold mb-8">Books List</h1>
      <div className="flex flex-wrap justify-center mb-8">
        <button
          onClick={handleUpdateByName}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Update By Name
        </button>
        <button
          onClick={handleUpdateByNameAndAuthor}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Update By Name And Author
        </button>
        <button
          onClick={handleDeleteById}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Delete By Book Id
        </button>
        <button
          onClick={handleDeleteByName}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Delete By Book Name
        </button>
        <button
          onClick={handleDeleteByDescAndAuthor}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Delete By Book Desc And Author
        </button>
        <button
          onClick={handleDeleteByNameAndCategory}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Delete By Book Name and Category
        </button>
        <button
          onClick={handleShowData}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Show All
        </button>
        <button
          onClick={handleShowById}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Show Book By Id
        </button>
        <button
          onClick={handleShowByName}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Show Book By Name
        </button>
        <button
          onClick={handleShowByNameAndAuthor}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Show Book By Name & Author
        </button>
        <button
          onClick={handleShowByMoreThan100}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Show Book pages More then 100
        </button>
        <button
          onClick={handleShowByLess90More25}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Show Book pages Less then 90 & More then 25
        </button>
        <button
          onClick={handleShowByLess90More25Ne80}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Show Book pages Less then 90 & More then 25 But not 80
        </button>
        <button
          onClick={handleShowByPage0}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Show Book pages Zero
        </button>
        <button
          onClick={handleShowByReleasedYear}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Show Book Released Year 2015 and 2001
        </button>
        <button
          onClick={() => handleSorting("name")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Sort By Book Name
        </button>
        <button
          onClick={() => handleSorting("price")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Sort By Book Price
        </button>
        <button
          onClick={() => handleSorting("author")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Sort By Book Author
        </button>
        <button
          onClick={() => handleSorting("noOfPage")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Sort By Book No_of_Pages
        </button>
        <button
          onClick={() => handleSorting("category")}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded m-2"
        >
          Sort By Book Category
        </button>
        <button
          onClick={() => handleSorting("relYear")}
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
            {loading ? (
              <tr className="hover:bg-slate-200 transition-colors duration-200">
                <td colSpan="8" className="py-3 px-6">
                  <Skeleton
                    count={5}
                    height={30}
                    style={{
                      backgroundColor: "#e5e7eb",
                      borderRadius: "4px",
                      marginBottom: "8px",
                      animation: "pulse 2s infinite ease-in-out",
                    }}
                  />
                </td>
              </tr>
            ) : books.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  className="py-3 px-6 text-center text-2xl border-b border-gray-200"
                >
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
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ${
              currentPage === index + 1 ? "bg-gray-500" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
      {modal1 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">
                {isNameAndAuthor ? "Update By Name & Author" : "Update By Name"}
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleCloseModal}
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
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter Book Name"
                  value={bookName}
                  onChange={(e) => setBookName(e.target.value)}
                />
              </div>
              {isNameAndAuthor && (
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Author
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter Author Name"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                  />
                </div>
              )}
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showForm && (
        <BookForm
          book={formData}
          onClose={() => setShowForm(false)}
          onUpdate={handleUpdate}
        />
      )}
      {modal2 &&
        (isBookName ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Delete By Book Name</h2>
                <button
                  className="text-gray-500 hover:text-gray-700 ml-3"
                  onClick={handleCloseModal}
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
              <form onSubmit={handleDeleteSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Book Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter Book Name"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : isDescAndAuthor ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">
                  Delete By Book Desc & Author
                </h2>
                <button
                  className="text-gray-500 hover:text-gray-700 ml-3"
                  onClick={handleCloseModal}
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
              <form onSubmit={handleDeleteSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Description
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter Book Description"
                    value={bookDesc}
                    onChange={(e) => setBookDesc(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Author
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter Book Author Name"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : isBookNameAndCategory ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">
                  Delete By Book Name & Category
                </h2>
                <button
                  className="text-gray-500 hover:text-gray-700 ml-3"
                  onClick={handleCloseModal}
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
              <form onSubmit={handleDeleteSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Book Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter Book Name"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Category
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter Book Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Delete By Book Id</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={handleCloseModal}
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
              <form onSubmit={handleDeleteSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Id
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter Book Id"
                    value={bookId}
                    onChange={(e) => setBookId(e.target.value)}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        ))}
      {modal3 &&
        (isShowBookId ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Show By Book Id</h2>
                <button
                  className="text-gray-500 hover:text-gray-700 ml-3"
                  onClick={handleCloseModal}
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
              <form onSubmit={handleShowData}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Book Id
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter Book Name"
                    value={bookId}
                    onChange={(e) => setBookId(e.target.value)}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : isBookName ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Show By Book Name</h2>
                <button
                  className="text-gray-500 hover:text-gray-700 ml-3"
                  onClick={handleCloseModal}
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
              <form onSubmit={handleShowData}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Book Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter Book Name"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">
                  Show By Book Name & Author
                </h2>
                <button
                  className="text-gray-500 hover:text-gray-700 ml-3"
                  onClick={handleCloseModal}
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
              <form onSubmit={handleShowData}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Book Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter Book Name"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Book Author
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter Book Author"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShowBooks;
