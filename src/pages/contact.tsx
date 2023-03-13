import React from 'react'

const Contact = () => {
  return (
    <div>
        <ContactForm />
    </div>
  )
}

export default Contact

const ContactForm = () => {
    return (
        <div className='w-full bg-blue-500 h-[662px] pt-[200px]'>
            <div>
                <div className='w-[800px] mx-auto flex flex-col justify-center items-center'>
                    <h1 className='text-white text-[62px] mb-[25px] text-center'>Request a Demo</h1>
                    <p className='text-white w-[450px] text-center'>If you are a professional, we offer a desktop admin platform, to allow a better and faster management of your whole business</p>
                </div>
                <div className='bg-white w-[873px] mx-auto p-10 shadow-lg rounded-3xl mt-[108px]'>
                    <h2 className='text-[42px] mb-[20px] font-poppins font-semibold'>Please fill your application</h2>
                    <div>
                        <form>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="w-full py-1 mb-16 transition-colors border-b focus:outline-none focus:border-blue-500 focus:border-b-2 peer" 
                                    autoComplete="off" />
                                <label 
                                    htmlFor="name" 
                                    className="absolute left-0 text-gray-600 transition-all top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-500"
                                    >Name
                                </label>
                            </div>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="email" 
                                    className="w-full py-1 mb-16 transition-colors border-b focus:outline-none focus:border-blue-500 focus:border-b-2 peer" 
                                    autoComplete="off" />
                                <label 
                                    htmlFor="email" 
                                    className="absolute left-0 text-gray-600 transition-all top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-500"
                                    >Email
                                </label>
                            </div>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="phone" 
                                    className="w-full py-1 mb-16 transition-colors border-b focus:outline-none focus:border-blue-500 focus:border-b-2 peer" 
                                    autoComplete="off" />
                                <label 
                                    htmlFor="phone" 
                                    className="absolute left-0 text-gray-600 transition-all top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-500"
                                    >Phone
                                </label>
                            </div>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="company" 
                                    className="w-full py-1 mb-16 transition-colors border-b focus:outline-none focus:border-blue-500 focus:border-b-2 peer" 
                                    autoComplete="off" />
                                <label 
                                    htmlFor="company" 
                                    className="absolute left-0 text-gray-600 transition-all top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-500"
                                    >Company
                                </label>
                            </div>
                            <div className="relative">
                                <select 
                                    id="roleInCompany" 
                                    className="w-full py-1 mb-16 transition-colors border-b focus:outline-none focus:border-blue-500 focus:border-b-2 peer" 
                                >
                                    <option></option>
                                </select>
                                <label 
                                    htmlFor="roleInCompany" 
                                    className="absolute left-0 text-gray-600 transition-all top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-500"
                                    >Role in Company
                                </label>
                            </div>
                            <div>
                                <button disabled className=' disabled:bg-[#E9EBEF] bg-blue-500 w-full h-[116px] rounded-xl text-[30px] font-semibold text-white'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Articles = () => {

}