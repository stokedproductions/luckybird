import Image from 'next/image'
import React from 'react'

const Buyers = () => {
    return (
        <div id="buyers" className="bg-[#5A89EA] py-20">
          <div className="mx-auto w-[95%] lg:w-[60%]">
            <div className="grid-1 grid gap-x-10 pt-[25px] lg:grid-cols-2">
              <div className="relative order-last flex  w-full flex-col items-center justify-center lg:order-first lg:h-[590px]">
                <div
                  className="absolute bottom-2 w-full max-w-[520px]"
                  style={{
                    background: 'linear-gradient(180deg, #5A89EA 0%, #030303 100%)',
                    boxShadow: 'inset 0px -12.48px 16.64px rgba(0, 0, 0, 0.25)',
                    borderRadius: '0px 0px 60.9221px 60.9221px',
                    aspectRatio: 520 / 385,
                  }}
                ></div>
                <div
                  className="z-10  max-w-[325px]"
                  style={{ aspectRatio: 325 / 592 }}
                >
                  <Image src="/app1.png" alt="app demo" width={324} height={592} />
                </div>
              </div>
    
              <div className="mb-10 flex w-full flex-col items-center justify-center lg:mb-0 lg:h-[500px]">
                <div className="mx-auto lg:w-[520px]">
                  <h3
                    className="mb-[25px] text-center font-poppins text-[35px] 
                    font-semibold leading-[105%] text-white lg:text-left lg:text-[42px]"
                  >
                    Search for the car of your dreams and test drive it
                  </h3>
                  <p className="mb-[25px] font-poppins text-[16px] leading-[22.4px] text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed
                    malesuada habitant odio eu etiam proin odio habitant. Elit felis
                    aliquam suspendisse amet nunc. Erat.
                  </p>
                  <ul className="flex flex-col">
                    <li className="flex gap-2 font-poppins text-[16px] text-white">
                      <Image src="/Icon.svg" width={48} height={47} alt="Icon" />
                      Multiple filtering options
                    </li>
                    <li className="flex gap-2 font-poppins text-[16px] text-white">
                      <Image src="/Icon.svg" width={48} height={47} alt="Icon" />
                      Test drives with both private sellers or dealerships
                    </li>
                    <li className="flex gap-2 font-poppins text-[16px] text-white">
                      <Image
                        src="/Icon.svg"
                        width={48}
                        height={47}
                        alt="Icon"
                        className="self-center"
                      />
                      Take pictures and notes during test drive
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    
            <div className="grid gap-10 pt-[100px] lg:grid-cols-2">
              <div className="flex w-full flex-col items-center justify-center lg:h-[500px]">
                <div className="mx-auto lg:w-[520px]">
                  <h3
                    className="mb-[25px] text-center font-poppins text-[35px] 
                    font-semibold leading-[105%] text-white lg:text-left lg:text-[42px]"
                  >
                    Only real people
                  </h3>
                  <p className="mb-[25px] font-poppins text-[16px] leading-[22.4px] text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed
                    malesuada habitant odio eu etiam proin odio habitant. Elit felis
                    aliquam suspendisse amet nunc. Erat.
                  </p>
                  <ul className="list-inside list-disc">
                    <li className="flex gap-2 text-[16px] text-white">
                      <Image src="/Icon.svg" width={48} height={47} alt="Icon" />
                      Secure and verified registration
                    </li>
                    <li className="flex gap-2 font-poppins text-[16px] text-white">
                      <Image src="/Icon.svg" width={48} height={47} alt="Icon" />
                      Direct messaging with the seller
                    </li>
                    <li className="flex gap-2 font-poppins text-[16px] text-white">
                      <Image src="/Icon.svg" width={48} height={47} alt="Icon" />
                      Instant armed response if something goes wrong
                    </li>
                  </ul>
                </div>
              </div>
    
              <div className="relative mt-10 flex h-[590px] w-full flex-col items-center justify-center lg:mt-0">
                <div
                  className="absolute bottom-2 w-full max-w-[520px]"
                  style={{
                    background: 'linear-gradient(180deg, #5A89EA 0%, #030303 100%)',
                    boxShadow: 'inset 0px -12.48px 16.64px rgba(0, 0, 0, 0.25)',
                    borderRadius: '0px 0px 60.9221px 60.9221px',
                    aspectRatio: 520 / 385,
                  }}
                ></div>
                <div
                  className="z-10  max-w-[325px]"
                  style={{ aspectRatio: 325 / 592 }}
                >
                  <Image src="/app1.png" alt="app demo" width={324} height={592} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Buyers