import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTitle } from "../hooks/useTitle";
import { register } from "../services";

export const Register = () => {

  const navigate = useNavigate();
  useTitle("Register")

  const handleRegister = async function (event) {
    event.preventDefault();
    try{
      const authDetail = {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value
      }
      const data = await register(authDetail);
      data.accessToken ? navigate("/products") : toast.error(data);
    }catch(error){
      toast.error(error.message, {closeButton: true, position: "bottom-center"});
    }

  };
  
  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white border border-gray-200 dark:border-slate-800 rounded-lg shadow-lg dark:bg-gray-900 sm:px-6 md:px-8 lg:px-10">
          <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
              Create a new account
          </div>

          {/* Already have an account */}
          <div className="flex items-center justify-center mb-4">
            <span className="ml-2 mr-2 text-base font-light text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                Already have an account?
            </span>
              <Link to="/login" className="inline-flex items-center text-base font-light text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                  <span className="text-blue-600 underline">Sign in</span>
              </Link>
          </div>

          <div className="mt-8">
              <form onSubmit={handleRegister} action="#" autoComplete="off">
                <div className="flex flex-col mb-2">

                  {/* Name */}
                  <div className="flex relative mb-2">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-album" viewBox="0 0 16 16">
                        <path d="M5.5 4a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5zm1 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3z"/>
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                      </svg>
                    </span>
                    <input type="text" name="name" id="sign-in-name" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-logo focus:border-transparent" placeholder="Your name"/>
                  </div>

                  </div>

                  <div className="flex flex-col mb-2">

                      {/* Email */}
                      <div className="flex relative mb-2">
                        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                          <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                              </path>
                          </svg>
                        </span>
                        <input type="text" name="email" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-logo focus:border-transparent" placeholder="Your email"/>
                      </div>

                  </div>

                  <div className="flex flex-col mb-6">

                      {/* Password */}
                      <div className="flex relative mb-4">
                        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                </path>
                            </svg>
                        </span>
                        <input type="password" name="password" id="sign-in-password" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-logo focus:border-transparent" placeholder="Your password"/>
                      </div>

                  </div>

                  {/* Register Button */}
                  <div className="flex w-full mb-4">
                      <button type="submit" className="py-2 px-4  bg-logo focus:ring-offset-pink-300 text-white w-full text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
                          Register
                      </button>
                  </div>

              </form>
          </div>

      </div>
    </main>
  )
}
