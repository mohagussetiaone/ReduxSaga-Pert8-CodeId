import React from "react";
import { Outlet } from "react-router-dom";

const navigate = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Customer Redux Saga", href: "customer", current: false },
  { name: "Sign Up", href: "signup", current: false },
  { name: "Sign In", href: "signin", current: false },
];

export default function Dashboard() {
  return (
    <>
      <nav id="header" class="w-full z-30 py-1 bg-white shadow-lg border-b border-blue-400 sticky top-0 z-100">
        <div class="w-full flex items-center justify-between mt-0 px-6 py-2 relative">
          <label for="menu-toggle" class="cursor-pointer md:hidden block">
            <svg class="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input class="hidden" type="checkbox" id="menu-toggle" />
          {/* {navigate.map((item) => {
            return ( */}
          <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
              <ul class="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                <li>
                  <a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="/">
                    Dashboard
                  </a>
                  <a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="customer">
                    Customer Saga
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* // ); // })} */}
          {/* {auth.map((item) => {
            return ( */}
          <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div class="auth flex items-center w-full md:w-full">
              <a class="bg-transparent text-blue-700  p-2 rounded border border-blue-700 mr-4 hover:bg-gray-100 hover:text-gray-700" href="signup">
                Sign Up
              </a>
              <a class="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100" href="signin">
                Sign In
              </a>
            </div>
          </div>
          {/* );
          })} */}
        </div>
      </nav>
      {/* <div> */}
      {/* <nav class="flex justify-start flex-no-wrap bg-teal-500 pt-4 pb-4 pl-2 pr-2">
          <div class="lg:hidden">
            <button class="flex px-1 py-1 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          {navigate.map((item) => {
            return (
              <>
                <div class="text-sm lg:flex-grow">
                  <a class="mt-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-0" key={item.name} href={item.href}>
                    {item.name}
                  </a>
                </div>
              </>
            );
          })}
        </nav> */}
      <header>
        <h1>{navigate.name}</h1>
      </header>
      <main>
        <Outlet />
      </main>
      {/* </div> */}
    </>
  );
}
