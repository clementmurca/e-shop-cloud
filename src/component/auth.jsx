import React, { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

export const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    async function signIn() {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("ca marche pas", error.message);
        }
      };

      const handleEmailChange = (e) => {
        setEmail(e.target.value)
      };

      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

    // async function signInGoogle() {
    //     try {
    //       await signInWithPopup(auth, googleAuth);
    //     } catch (error) {
    //         console.error("ca marche pas", error.message);
    //     }
    //   };

    async function logOut() {
        try {
          await signOut(auth);
        } catch (error) {
            console.error("ca marche pas", error.message);
        }
      };

    //   googleAuth.setCustomParameters({
    //     prompt: 'select_account',
    //   });
  
    //   signInWithPopup(auth, googleAuth).catch((error) => {
    //     console.error(error);
    //   });

    return <>
   <div className="bg-green-100 h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Se connecter
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="">
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleEmailChange}
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-sky-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-sky-600 shadow-sm ring-1 ring-inset ring-sky-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={signIn}
                type="submit"
                className="flex w-full mb-4 justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Se connecter
              </button>
              {/* <button
                onClick={signInGoogle}
                type="submit"
                className="flex w-full mb-4 justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Se connecter avec google
              </button> */}
              <button
                onClick={logOut}
                type="submit"
                className="flex w-full mb-4 justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Se déconnecter
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
      </>
}