import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import AddBook from "./components/AddBook";
import ShowBook from "./components/ShowBook";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import NoPage from "./components/NoPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="addbook" element={<AddBook />} />
        <Route path="showbook" element={<ShowBook />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="logout" element={<Logout />} />
      <Route path="*" element={<NoPage />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
