import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'

function Header() {
  const [navbar, setNavbar] = useState(false)
  const [hasBgColor, setHasBgColor] = useState(false)
  const router = useRouter()

  const scrolled = useCallback(() => {
    const scrollPos = document.documentElement.scrollTop
    scrollPos > 184 ? setHasBgColor(true) : setHasBgColor(false)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', scrolled)
    return () => window.removeEventListener('scroll', scrolled)
  }, [scrolled])

  return (
    <>
      <nav
        className={
          'absolute z-50 w-full pb-10' + // fixed
          `${hasBgColor ? 'bg-[#00000040] ' : 'bg-transparent'}`
        }
      >
        <div className="mx-auto w-[90%] justify-between md:w-[60%] hideButton:flex hideButton:py-5 hideButton:pr-5 bg-black">
          <div>
            <div className="flex justify-between py-3 px-5 hideButton:block">
              <div className="relative h-[55px] w-[175px] md:h-[100px] md:w-[300px]">
                <Link href="/" passHref>
                  <Image
                    src="/Logo1.svg"
                    alt="App logo"
                    width={131}
                    height={132}
                  />
                </Link>
              </div>
              <div className="flex hideButton:hidden">
                <button
                  className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
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
                      className="h-6 w-6 text-white"
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
              className={`mt-8 flex-1 justify-self-center pb-3 lg:mt-0 lg:pb-0 xl:block ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="ml-10 lg:flex lg:space-x-6 lg:space-y-0 mt-20 lg:mt-0">
                <li className="py-2 text-white">
                  <Link href="#buyers">
                    <p>For Buys</p>
                  </Link>
                </li>
                <li className="py-2 text-white">
                  <Link href="#sellers">
                    <p>For Sellers</p>
                  </Link>
                </li>
                <li className="py-2 text-white">
                  <Link href="#dealerships">
                    <p>Dealers</p>
                  </Link>
                </li>
                <li className="py-2 text-white">
                  <Link href="#security">
                    <p>Security</p>
                  </Link>
                </li>
                <li className="rounded-md bg-blue-400 py-2 px-5 text-white">
                  <a href="https://www.luckybeard.com" target="blank">
                    <p>Dealers Login</p>
                  </a>
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
