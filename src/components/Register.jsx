// import { Link } from "react-router-dom";

// function Register() {
//   return (
//     <section className="bg-gray-50">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//               Create an account
//             </h1>
//             <form className="space-y-4 md:space-y-6" action="#">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block mb-2 text-sm font-medium text-white "
//                 >
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
//                   placeholder="karan"
//                   required=""
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block mb-2 text-sm font-medium text-white"
//                 >
//                   Your email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
//                   placeholder="name@company.com"
//                   required=""
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="gender"
//                   className="block mb-2 text-sm font-medium text-white"
//                 >
//                   Gender :-
//                 </label>
//                 <div className="flex items-center space-x-3">
//                   <input
//                     type="radio"
//                     id="male"
//                     name="gender"
//                     value="male"
//                     className="mr-1"
//                     required=""
//                   />
//                   <label htmlFor="male" className="text-sm text-white">
//                     Male
//                   </label>
//                   <input
//                     type="radio"
//                     id="female"
//                     name="gender"
//                     value="female"
//                     className="mr-1"
//                     required=""
//                   />
//                   <label htmlFor="female" className="text-sm text-white">
//                     Female
//                   </label>
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="interests" className="block mb-2 text-sm font-medium text-white">
//                   Interest :-
//                 </label>
//                 <div className="flex items-center space-x-4">
//                   <div>
//                     <input
//                       type="checkbox"
//                       id="Fiction"
//                       name="interests"
//                       value="Fiction"
//                     //   onChange={handleInterestChange}
//                       className="mr-1"
//                     />
//                     <label htmlFor="Fiction" className="text-sm text-white ">
//                     Fiction
//                     </label>
//                   </div>
//                   <div>
//                     <input
//                       type="checkbox"
//                       id="Science Fiction"
//                       name="interests"
//                       value="Science Fiction"
//                     //   onChange={handleInterestChange}
//                       className="mr-1"
//                     />
//                     <label htmlFor="Science Fiction" className="text-sm text-white">
//                     Science Fiction
//                     </label>
//                   </div>

//                   <div>
//                     <input
//                       type="checkbox"
//                       id="Autobiographies"
//                       name="interests"
//                       value="Autobiographies"
//                     //   onChange={handleInterestChange}
//                       className="mr-1"
//                     />
//                     <label htmlFor="Autobiographies" className="text-sm text-white">
//                     Autobiographies
//                     </label>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <div>
//                     <input
//                       type="checkbox"
//                       id="Personal Development"
//                       name="interests"
//                       value="Personal Development"
//                     //   onChange={handleInterestChange}
//                       className="mr-1"
//                     />
//                     <label htmlFor="Personal Development" className="text-sm text-white ">
//                     Personal Development
//                     </label>
//                   </div>
//                   <div>
//                     <input
//                       type="checkbox"
//                       id="Travel"
//                       name="interests"
//                       value="Travel"
//                     //   onChange={handleInterestChange}
//                       className="mr-1"
//                     />
//                     <label htmlFor="Travel" className="text-sm text-white">
//                     Travel
//                     </label>
//                   </div>

//                   <div>
//                     <input
//                       type="checkbox"
//                       id="Business"
//                       name="interests"
//                       value="Business"
//                     //   onChange={handleInterestChange}
//                       className="mr-1"
//                     />
//                     <label htmlFor="Business" className="text-sm text-white">
//                     Business
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block mb-2 text-sm font-medium text-white"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="••••••••"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
//                   required=""
//                 />
//               </div>
//               <div className="flex items-start">
//                 <div className="flex items-center h-5">
//                   <input
//                     id="terms"
//                     aria-describedby="terms"
//                     type="checkbox"
//                     className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
//                     required=""
//                   />
//                 </div>
//                 <div className="ml-3 text-sm">
//                   <label
//                     htmlFor="terms"
//                     className="font-light text-gray-500 dark:text-gray-300"
//                   >
//                     I accept the{" "}
//                     <a
//                       className="font-medium text-primary-600 hover:underline dark:text-primary-500"
//                       href="#"
//                     >
//                       Terms and Conditions
//                     </a>
//                   </label>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//               >
//                 Create an account
//               </button>
//               <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                 Already have an account?{" "}
//                 <Link
//                   to="/login"
//                   className="font-medium text-primary-600 hover:underline dark:text-primary-500"
//                 >
//                   Login here
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Register;

import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    gender: Yup.string().required("Gender is required"),
    interests: Yup.array().min(1, "Select at least one interest"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    terms: Yup.boolean().oneOf(
      [true],
      "Accept Terms and Conditions is required"
    ),
  });

  const navigate = useNavigate();
  return (
    <section className="bg-gray-50">
      <ToastContainer />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <Formik
              initialValues={{
                name: "",
                email: "",
                gender: "",
                interests: [],
                password: "",
                terms: false,
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values)
                axios
                  .post("http://localhost:3001/api/v1/user/signup", values)
                  .then((response) => {
                    console.log(
                      "Registation Successfully :",
                      response.data.message
                    );
                    toast.success(response.data.message);
                    setTimeout(() => navigate("/login"), 1000);
                  })
                  .catch((error) => {
                    console.error("Registration failed:", error);
                    toast.error(error.response.data.message);
                  });
              }}
            >
              {() => (
                <Form className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-white "
                    >
                      Your Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="karan"
                      required=""
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Your email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="name@company.com"
                      required=""
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="gender"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Gender :-
                    </label>
                    <div className="flex items-center space-x-3">
                      <Field
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        className="mr-1"
                        required=""
                      />
                      <label htmlFor="male" className="text-sm text-white">
                        Male
                      </label>
                      <Field
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        className="mr-1"
                        required=""
                      />
                      <label htmlFor="female" className="text-sm text-white">
                        Female
                      </label>
                    </div>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="text-red-500 text-sm mt-2"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interests"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Interest :-
                    </label>
                    <div className="flex items-center space-x-4">
                      <Field
                        type="checkbox"
                        id="fiction"
                        name="interests"
                        value="Fiction"
                        className="mr-1"
                      />
                      <label htmlFor="fiction" className="text-sm text-white ">
                        Fiction
                      </label>
                      <Field
                        type="checkbox"
                        id="sci-fi"
                        name="interests"
                        value="Science Fiction"
                        className="mr-1"
                      />
                      <label htmlFor="sci-fi" className="text-sm text-white">
                        Science Fiction
                      </label>
                      <Field
                        type="checkbox"
                        id="auto"
                        name="interests"
                        value="Autobiographies"
                        className="mr-1"
                      />
                      <label htmlFor="auto" className="text-sm text-white">
                        Autobiographies
                      </label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Field
                        type="checkbox"
                        id="Travel"
                        name="interests"
                        value="Travel"
                        className="mr-1"
                      />
                      <label htmlFor="Travel" className="text-sm text-white ">
                        Travel
                      </label>
                      <Field
                        type="checkbox"
                        id="Personal Development"
                        name="interests"
                        value="Personal Development"
                        className="mr-1"
                      />
                      <label
                        htmlFor="Personal Development"
                        className="text-sm text-white"
                      >
                        Personal Development
                      </label>
                      <Field
                        type="checkbox"
                        id="Nature"
                        name="interests"
                        value="Nature"
                        className="mr-1"
                      />
                      <label htmlFor="Nature" className="text-sm text-white">
                        Nature
                      </label>
                    </div>
                    <ErrorMessage
                      name="interests"
                      component="div"
                      className="text-red-500 text-sm mt-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      required=""
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-2"
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Field
                        type="checkbox"
                        id="terms"
                        name="terms"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{" "}
                        <a
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                    <ErrorMessage
                      name="terms"
                      component="div"
                      className="text-red-500 text-sm mt-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login here
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
