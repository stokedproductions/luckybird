import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Dealerships } from '@/components/Dealership'
import IconCard from '@/components/iconCard'

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Section2 />
        <Section3 />
        <Dealerships />
        <Section4 />
      </main>
    </>
  )
}

const HeroSection = () => {
  return (
    <>
      <div
        className="flex h-[840px] flex-col justify-center"
        style={{ backgroundImage: 'url(./hero-image.png)' }}
      >
        <div className="mx-auto w-[60%]">
          <div className="">
            <h1 className="text-poppins mb-[25px] text-center text-[62px] font-semibold text-white">
              A new era for test-drives
            </h1>
            <p className="texl-[16px] mx-auto w-[40%] text-center font-poppins font-normal leading-[24px] text-white">
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
      <div className="absolute -bottom-[0px] h-[260px] w-full">
        <Image src="/blue-top.svg" alt="blue-top" fill />
      </div>
    </>
  )
}

const Section2 = () => {
  return (
    <div id="buyers" className="bg-[#5A89EA] py-20">
      <div className="mx-auto w-[60%]">
        <div className="grid grid-cols-2 gap-x-10 pt-[25px]">
          <div className="relative flex h-[590px] w-full flex-col items-center justify-center">
            <div
              className="absolute bottom-2 h-[384.8px] w-[520px]"
              style={{
                background: 'linear-gradient(180deg, #5A89EA 0%, #030303 100%)',
                boxShadow: 'inset 0px -12.48px 16.64px rgba(0, 0, 0, 0.25)',
                borderRadius: '0px 0px 60.9221px 60.9221px',
              }}
            ></div>
            <div className="z-10 h-[592px] w-[325px]">
              <Image src="/app1.png" alt="app demo" width={324} height={592} />
            </div>
          </div>

          <div className="flex h-[500px] w-full flex-col items-center justify-center">
            <div className="mx-auto w-[520px]">
              <h3 className="mb-[25px] font-poppins text-[42px] font-semibold leading-[50.4px] text-white">
                Search for the car of your dreams and test drive it
              </h3>
              <p className="mb-[25px] font-poppins text-[16px] leading-[22.4px] text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed
                malesuada habitant odio eu etiam proin odio habitant. Elit felis
                aliquam suspendisse amet nunc. Erat.
              </p>
              <ul className="">
                <li className="flex gap-2 font-poppins text-[16px] text-white">
                  <Image src="/icon.svg" width={48} height={47} alt="Icon" />
                  Multiple filtering options
                </li>
                <li className="flex gap-2 font-poppins text-[16px] text-white">
                  <Image src="/icon.svg" width={48} height={47} alt="Icon" />
                  Test drives with both private sellers or dealerships
                </li>
                <li className="flex gap-2 font-poppins text-[16px] text-white">
                  <Image src="/icon.svg" width={48} height={47} alt="Icon" />
                  Take pictures and notes during test drive
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 pt-[100px]">
          <div className="flex h-[500px] w-full flex-col items-center justify-center">
            <div className="mx-auto w-[520px]">
              <h3 className="mb-[25px] font-poppins text-[42px] font-semibold leading-[50.4px] text-white">
                Only real people
              </h3>
              <p className="mb-[25px] font-poppins text-[16px] leading-[22.4px] text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed
                malesuada habitant odio eu etiam proin odio habitant. Elit felis
                aliquam suspendisse amet nunc. Erat.
              </p>
              <ul className="list-inside list-disc">
                <li className="flex gap-2 text-[16px] text-white">
                  <Image src="/icon.svg" width={48} height={47} alt="Icon" />
                  Secure and verified registration
                </li>
                <li className="flex gap-2 font-poppins text-[16px] text-white">
                  <Image src="/icon.svg" width={48} height={47} alt="Icon" />
                  Direct messaging with the seller
                </li>
                <li className="flex gap-2 font-poppins text-[16px] text-white">
                  <Image src="/icon.svg" width={48} height={47} alt="Icon" />
                  Instant armed response if something goes wrong
                </li>
              </ul>
            </div>
          </div>
          <div className="relative flex h-[590px] w-full flex-col items-center justify-center">
            <div
              className="absolute bottom-2 h-[384.8px] w-[520px]"
              style={{
                background: 'linear-gradient(180deg, #5A89EA 0%, #030303 100%)',
                boxShadow: 'inset 0px -12.48px 16.64px rgba(0, 0, 0, 0.25)',
                borderRadius: '0px 0px 60.9221px 60.9221px',
              }}
            ></div>
            <div className="z-10 h-[592px] w-[325px]">
              <Image src="/app1.png" alt="app demo" width={324} height={592} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Section3 = () => {
  return (
    <div id="sellers" className="bg-gradient-to-b from-[#5A89EA] to-black">
      <div className="flex h-[886px] flex-col bg-[url('/Union.png')]">
        <div className="mx-auto mt-[138px] flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center">
            <h3 className="mb-[38px] text-center font-poppins text-[62px] font-semibold leading-[105%] text-white">
              Private seller? <br /> We got your back
            </h3>
            <p className="mb-[36px] w-[470px] text-center font-poppins text-[16px] leading-[22.4px] text-white">
              Want to sell your current car? Put it on Dealr, schedule
              appointments and take advantage of our integrated financing
              engine.
            </p>
          </div>
          <div>
            <div className="mx-auto grid grid-cols-6 gap-5">
              <IconCard
                title="verified buys"
                description="Secure and verified registration"
              />
              <IconCard
                title=" no time wasters"
                description="Buyers undergo a credit check before to be able to book a test drive"
              />
              <IconCard
                title="scheduling"
                description="Set test drive scheduling"
              />
              <IconCard
                title="easy upload"
                description=" Add a car ad in minutes via our extensive database of car models"
              />
              <IconCard
                title="geo-located"
                description="Notifications to Geo-located opportunities"
              />
              <IconCard
                title="chat in a tap"
                description="Direct messaging with buyer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Section4 = () => {
  return (
    <div id="security">
      <div className="bubble"></div>
      <div className="mx-auto my-20 w-[60%]">
        <div>
          <div className="">
            <div className="grid grid-cols-2 items-center justify-center gap-10">
              <div className="flex w-full flex-col items-center justify-center">
                <div className="mx-auto flex w-[520px] flex-col justify-center">
                  <h3 className="mb-[25px] font-bebas text-[24px] uppercase leading-[29px]">
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
              <div className="relative flex w-full flex-col items-center justify-center">
                <div className="w-[470px]">
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
