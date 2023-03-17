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
        {/* <Section4 /> */}
      </main>
    </>
  )
}

const HeroSection = () => {
  return (
    <div
      className="flex h-[840px] flex-col justify-center"
      style={{ backgroundImage: 'url(./hero-image.png)' }}
    >
      <div className="mx-auto w-[60%]">
        <div className="">
          <h1 className="mb-[25px] text-center text-[62px] text-white text-poppins font-semibold">
            A new era for test-drives
          </h1>
          <p className="texl-[16px] leading-[24px] mx-auto w-[40%] text-center text-white font-poppins font-normal">
            Enhanced test drive experience through the connection of people in a
            secure, scheduled and convenient manner to ensure the seamless
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
  )
}

const Section2 = () => {
  return (
    <div className="bg-[#5A89EA] py-20">
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
              <h3 className="mb-[25px] text-[42px] leading-[50.4px] text-white font-poppins font-semibold">
                Search for the car of your dreams and test drive it
              </h3>
              <p className="mb-[25px] text-[16px] leading-[22.4px] text-white font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed
                malesuada habitant odio eu etiam proin odio habitant. Elit felis
                aliquam suspendisse amet nunc. Erat.
              </p>
              <ul className="">
                <li className="text-[16px] text-white flex gap-2 font-poppins">
                  <Image src="/icon.svg" width={48} height={47} alt="Icon" />
                  Multiple filtering options
                </li>
                <li className="text-[16px] text-white flex gap-2 font-poppins">
                  <Image src="/icon.svg" width={48} height={47} alt="Icon" />
                  Test drives with both private sellers or dealerships
                </li>
                <li className="text-[16px] text-white flex gap-2 font-poppins">
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
            <h3 className="mb-[25px] text-[42px] leading-[50.4px] text-white font-poppins font-semibold">
                Only real people
              </h3>
              <p className="mb-[25px] text-[16px] leading-[22.4px] text-white font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed
                malesuada habitant odio eu etiam proin odio habitant. Elit felis
                aliquam suspendisse amet nunc. Erat.
              </p>
              <ul className="list-disc list-inside">
                <li className="text-[16px] text-white flex gap-2">
                  <Image src="/icon.svg" width={48} height={47} alt="Icon" />
                  Secure and verified registration
                </li>
                <li className="text-[16px] text-white flex gap-2 font-poppins">
                  <Image src="/icon.svg" width={48} height={47} alt="Icon" />
                  Direct messaging with the seller
                </li>
                <li className="text-[16px] text-white flex gap-2 font-poppins">
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
    <div className='bg-gradient-to-b from-[#5A89EA] to-black'>
      <div
        className="flex h-[886px] flex-col bg-[url('/Union.png')]"
      >
        <div className="flex flex-col items-center justify-center mx-auto mt-[138px]">
          <div className="flex flex-col justify-center">
            <h3 className="mb-[38px] text-center text-[62px] font-semibold leading-[105%] text-white font-poppins">
              Private seller? <br /> We got your back
            </h3>
            <p className="mb-[36px] w-[470px] text-center text-white font-poppins text-[16px] leading-[22.4px]">
              Want to sell your current car? Put it on Dealr, schedule
              appointments and take advantage of our integrated financing engine.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-6 gap-5 mx-auto">
              <IconCard title="verified buys" description="Secure and verified registration" />
              <IconCard title=" no time wasters" 
                  description="Buyers undergo a credit check before to be able to book a test drive" />
              <IconCard title="scheduling" 
                description="Set test drive scheduling"/>
              <IconCard title="easy upload"
                description=" Add a car ad in minutes via our extensive database of car models" />
              <IconCard title="geo-located"
                description="Notifications to Geo-located opportunities" />
              <IconCard title="chat in a tap"
                description="Direct messaging with buyer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Section4 = () => {
  return (
    <div className="mx-auto w-[60%] my-20">
      <div>
        <div className="">
          <div className="grid items-center justify-center grid-cols-2 gap-10">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="mx-auto flex w-[520px] flex-col justify-center">
                <h3 className="mb-[25px] text-[24px] uppercase leading-[29px] font-bebas">
                  something goes wrong?
                </h3>
                <p className="mb-[25px] text-[48px] leading-[105%] font-poppins font-semibold">
                  Immediate armed response.
                </p>
                <p className="text-[16px] leading-[140%] font-poppins">
                  If for any reason something goes wrong, both buyer and seller
                  can use the panic button and get instant armed response by
                  AURA security services. Stay safe with Dealr.
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
            <div className="relative flex flex-col items-center justify-center w-full">
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
  )
}
