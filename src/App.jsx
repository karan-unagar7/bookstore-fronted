import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import {ModelProvider} from "./context/Context"
import Layout from "./components/Layout";
import AddBook from "./components/AddBook";
import ShowBook from "./components/ShowBook";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import NoPage from "./components/NoPage";
import { useState } from "react";

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
  const [model,setModel]=useState({
    modelName:"book",
    updateByName:false,
    updateByAuthor:false,
    inputName: false,
    inputId: false,
    name: false,
    modelNumber:0,
    inputAuthor: false,
    inputDescription: false,
    inputCategory:false,
    inputNoOfPages:false,
    inputPrice: false,
    inputReleaseDate: false,
    sortValues:null,
  })
  return (
    <ModelProvider value={[model,setModel]}>
      <RouterProvider router={router} />
    </ModelProvider>
  );
}
export default App;
