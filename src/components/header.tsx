import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

function Header() {
    const [navbar, setNavbar] = useState(false);
    const router = useRouter();

    // TODO MAKE HEAEDER FIXED
    return (
    <>
       <nav className="w-full fixed">
        <div className="w-[90%] md:w-[60%] justify-between mx-auto hideButton:items-center hideButton:flex hideButton:pr-5">
          <div>
            <div className="flex py-3 px-5 lg:py-5 hideButton:block justify-between">
              <div className='w-[175px] h-[55px] md:w-[300px] md:h-[100px] relative'>
              <Link href="/" passHref>
                <Image 
                    src="/Logo1.svg"
                    alt="App logo"
                    width={131}
                    height={132}
                />
              </Link>
              </div>
              <div className="flex items-center justify-center hideButton:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 xl:block lg:pb-0 lg:mt-0 ${navbar ? 'block' : 'hidden'}`}
            >
              <ul className="items-center justify-center ml-10 space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                <li className='text-white'>
                  <Link href="#">
                    <p>For Buys</p>
                  </Link>
                </li>
                <li className='text-white'>
                  <Link href="#">
                    <p>For Sellers</p>
                  </Link>
                </li>
                <li className='text-white'>
                  <Link href='#'>
                    <p>Dealers</p>
                  </Link>
                </li>
                <li className='text-white'>
                  <Link href="#">
                    <p>Security</p>
                  </Link>
                </li>
                <li className='text-white bg-blue-400 py-2 px-5 rounded-md'>
                  <Link href="#">
                    <p>Dealers Login</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
