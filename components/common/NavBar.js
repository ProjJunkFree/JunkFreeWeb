"use client";

import { Disclosure } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { logout as setLogout } from "@/redux/features/authSlice";
import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";
import NavLink from "./NavLink";

export default function NavBar() {
  const pathName = usePathname();
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const handleLogout = () => {
    logout()
      .unwrap()
      .then(() => {
        dispatch(setLogout());
        toast.success("You successfully logged out");
      });
  };
  const isSelected = (path) => (pathName === path ? true : false);

  // ang links can have logic , ang style kay mag depende if naka desktop or mobile

  /*  OLD
  const authLinks = <div className="text-white">AUTH LINKS</div>;
  const guesLinks = <div className="text-white">AUTH LINKS</div>; 
  */

  const authLinks = (isMobile) => (
    <>
      <NavLink
        isSelected={isSelected("/listings")}
        isMobile={isMobile}
        href="/listings"
      >
        Listings
      </NavLink>
      <NavLink
        isSelected={isSelected("/profile")}
        isMobile={isMobile}
        href="/profile"
      >
        Profile
      </NavLink>
      <NavLink isMobile={isMobile} onClick={handleLogout}>
        Logout
      </NavLink>
    </>
  );

  const guesLinks = (isMobile) => (
    <>
      <NavLink
        isSelected={isSelected("/auth/login")}
        isMobile={isMobile}
        href="/auth/login"
      >
        Login
      </NavLink>
      <NavLink
        isSelected={isSelected("/auth/register")}
        isMobile={isMobile}
        href="/auth/register"
      >
        Register
      </NavLink>
    </>
  );

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink href="/" isBanner>
                    JunkFree
                  </NavLink>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* different navigation links */}
                    {isAuthenticated ? authLinks(false) : guesLinks(false)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* navigation links for mobile */}
              {isAuthenticated ? authLinks(true) : guesLinks(true)}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
