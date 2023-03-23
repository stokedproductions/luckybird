import Image from 'next/image'
import React from 'react'

const Security = () => {
    return (
        <div id="security">
          <div className="bubble"></div>
          <div className="mx-auto my-20 w-[95%] lg:w-[60%]">
            <div>
              <div className="">
                <div className="grid-1 grid items-center justify-center gap-10 lg:grid-cols-2">
                  <div className="flex w-full flex-col items-center justify-center">
                    <div className="mx-auto flex w-[95%] flex-col justify-center lg:w-[520px]">
                      <h3 className="mb-[25px] mt-10 font-bebas text-[24px] uppercase leading-[29px] lg:mt-0">
                        something goes wrong?
                      </h3>
                      <p className="mb-[25px] font-poppins text-[48px] font-semibold leading-[105%]">
                        Immediate armed response.
                      </p>
                      <p className="font-poppins text-[16px] leading-[140%]">
                        If for any reason something goes wrong, both buyer and
                        seller can use the panic button and get instant armed
                        response by AURA security services. Stay safe with Dealr.
                      </p>
                    </div>
                    <div className="mx-auto mt-[25px] flex w-[293.32px] items-center justify-between">
                      <div className="w-[125.82px] rounded-xl">
                        <Image
                          src="/AppStoreBadge.png"
                          alt="Download from the apple app store"
                          width="126"
                          height="42"
                        />
                      </div>
                      <div className="h-[42px] w-[141.82px] rounded-xl">
                        <Image
                          src="/GooglePlay.png"
                          alt="Download from the android play store"
                          width="142"
                          height="42"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative flex w-full flex-col items-center justify-center">
                    <div
                      className="w-[95%] lg:w-[470px]"
                      style={{ aspectRatio: 470 / 62 }}
                    >
                      <Image
                        src="/app2.png"
                        width={470}
                        height={68}
                        alt="app photo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Security