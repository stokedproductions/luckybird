import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div
        className="flex h-[650px] w-full flex-col justify-center bg-no-repeat lg:h-[840px]"
        style={{ backgroundImage: 'url(./blue-top.svg), url(./hero-image.png)', backgroundPosition: 'bottom center' }}
      >
        <div className="mx-auto w-[95%] lg:w-[60%]">
          <div className="">
            <h1 className="text-poppins mb-[25px] text-center text-[62px] font-semibold leading-[105%] text-white">
              A new era for test-drives
            </h1>
            <p className="texl-[16px] mx-auto text-center font-poppins font-normal leading-[24px] text-white lg:w-[40%]">
              Enhanced test drive experience through the connection of people in
              a secure, scheduled and convenient manner to ensure the seamless
              buying and selling of new and used vehicles.{' '}
            </p>
            <div className="mx-auto mt-[25px] flex w-[293.32px] items-center justify-between">
              <div className="h-[42px] w-[125.82px] rounded-xl">
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
        </div>
        {/* <div className='w-[50px] h-[50px] rounded-full bg-white absolute bottom-5'></div> */}
      </div>
      {/* <div
        className="-mt-[10vw] w-full max-mt"
        style={{
          aspectRatio: 1920 / 260,
        }}
      >
        <Image src="/blue-top.svg" alt="blue-top" width={1920} height={260} />
      </div> */}
    </>
  )
}

export default HeroSection
