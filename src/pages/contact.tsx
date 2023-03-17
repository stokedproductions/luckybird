import { Dealerships } from '@/components/Dealership'
import React, { useEffect, useState } from 'react'

const Contact = () => {
  return (
    <div>
      <ContactForm />
      <Dealerships />
      <Articles />
    </div>
  )
}

export default Contact

const ContactForm = () => {
  return (
    <div className="w-full bg-blue-500 pt-[200px]">
      <div>
        <div className="mx-auto flex w-[800px] flex-col items-center justify-center">
          <h1 className="mb-[25px] text-center text-[62px] text-white">
            Request a Demo
          </h1>
          <p className="w-[450px] text-center text-white">
            If you are a professional, we offer a desktop admin platform, to
            allow a better and faster management of your whole business
          </p>
        </div>
        <div className="mx-auto mt-[108px] w-[873px] rounded-3xl bg-white p-10 shadow-lg">
          <h2 className="mb-[20px] font-poppins text-[42px] font-semibold">
            Please fill your application
          </h2>
          <div>
            <form>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="w-full py-1 mb-16 transition-colors border-b peer focus:border-b-2 focus:border-blue-500 focus:outline-none"
                  autoComplete="off"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 text-gray-600 transition-all top-1 cursor-text peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-500"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  className="w-full py-1 mb-16 transition-colors border-b peer focus:border-b-2 focus:border-blue-500 focus:outline-none"
                  autoComplete="off"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 text-gray-600 transition-all top-1 cursor-text peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-500"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="phone"
                  className="w-full py-1 mb-16 transition-colors border-b peer focus:border-b-2 focus:border-blue-500 focus:outline-none"
                  autoComplete="off"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 text-gray-600 transition-all top-1 cursor-text peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-500"
                >
                  Phone
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="company"
                  className="w-full py-1 mb-16 transition-colors border-b peer focus:border-b-2 focus:border-blue-500 focus:outline-none"
                  autoComplete="off"
                />
                <label
                  htmlFor="company"
                  className="absolute left-0 text-gray-600 transition-all top-1 cursor-text peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-500"
                >
                  Company
                </label>
              </div>
              <div className="relative">
                <select
                  id="roleInCompany"
                  className="w-full py-1 mb-16 transition-colors border-b peer focus:border-b-2 focus:border-blue-500 focus:outline-none"
                >
                  <option></option>
                </select>
                <label
                  htmlFor="roleInCompany"
                  className="absolute left-0 text-gray-600 transition-all top-1 cursor-text peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-500"
                >
                  Role in Company
                </label>
              </div>
              <div>
                <button
                  disabled
                  className=" h-[116px] w-full rounded-xl bg-blue-500 text-[30px] font-semibold text-white disabled:bg-[#E9EBEF]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const Articles = () => {
    const [articleList, setArticleList] = useState(null);
    const [loading, setLoading] = useState(true);

    const getArticles = async () => {
        const sub = await fetch('');
    }

    useEffect(() => {
        
    }, [])
    return (<div className='py-20 bg-black'>
        <div>
            <div className='w-[60%] mx-auto'>
                <h4 className='text-white'>Articles</h4>
                <h4 className='text-white'>Articles</h4>
                <h4 className='text-white'>Articles</h4>
            </div>
        </div>
    </div>)
}
