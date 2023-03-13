import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

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
    <div className= "h-[840px] flex flex-col justify-center" style={{ backgroundImage : 'url(./hero-image.png)'}}>
      <div className='w-[60%] mx-auto'>
        <div className=''>
          <h1 className='text-white text-[62px] text-center mb-[25px]'>A new era for test-drives</h1>
          <p className='text-white texl-[16px] w-[40%] mx-auto text-center'>Enhanced test drive experience through the connection of people in a secure, scheduled and convenient manner to ensure the seamless buying and selling of new and used vehicles. </p>
          <div className='flex justify-between items-center w-[293.32px] mx-auto mt-[25px]'>
            <div className='w-[125.82px] h-[42px] rounded-xl'>
              <Image src="/AppStoreBadge.png" alt="Download from the apple app store" width="126" height="42" />
            </div>
            <div className='w-[141.82px] h-[42px] rounded-xl'>
              <Image src="/GooglePlay.png" alt="Download from the android play store" width="142" height="42" />
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
    <div className='bg-[#5A89EA] py-20'>
      <div className='w-[60%] mx-auto'>

        <div className='grid grid-cols-2 gap-x-10 pt-[25px]'>
          <div className='w-full h-[590px] flex justify-center items-center flex-col relative'>
            <div className="h-[384.8px] w-[520px] absolute bottom-2" 
              style={{background: "linear-gradient(180deg, #5A89EA 0%, #030303 100%)", 
                boxShadow: "inset 0px -12.48px 16.64px rgba(0, 0, 0, 0.25)",
                borderRadius: "0px 0px 60.9221px 60.9221px"}}></div>
            <div className="w-[325px] h-[592px] z-10">
              <Image src="/app1.png" alt="app demo" width={324} height={592} />
            </div>
          </div>

          <div className='w-full h-[500px] flex flex-col justify-center items-center'>
            <div className='w-[520px] mx-auto'>
              <h3 className="text-white text-[42px] leading-[50.4px] mb-[25px]">
                Search for the car of your dreams and test drive it
              </h3>
              <p className='text-white text-[16px] mb-[25px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed malesuada habitant odio eu etiam proin odio habitant. Elit felis aliquam suspendisse amet nunc. Erat.
              </p>
              <ul className="list-disc list-inside">
                <li className='text-white text-[16px]'>Multiple filtering options</li>
                <li className='text-white text-[16px]'>Test drives with both private sellers or dealerships</li>
                <li className='text-white text-[16px]'>Take pictures and notes during test drive</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className='grid grid-cols-2 gap-10 pt-[100px]'>
        <div className='w-full h-[500px] flex flex-col justify-center items-center'>
            <div className='w-[520px] mx-auto'>
              <h3 className="text-white text-[42px] leading-[50.4px] mb-[25px]">
              Only real people
              </h3>
              <p className='text-white text-[16px] mb-[25px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed malesuada habitant odio eu etiam proin odio habitant. Elit felis aliquam suspendisse amet nunc. Erat.
              </p>
              <ul className="list-disc list-inside">
                <li className='text-white text-[16px]'>Secure and verified registration</li>
                <li className='text-white text-[16px]'>Direct messaging with the seller</li>
                <li className='text-white text-[16px]'>Instant armed response if something goes wrong</li>
              </ul>
            </div>
          </div>
          <div className='w-full h-[590px] flex justify-center items-center flex-col relative'>
            <div className="h-[384.8px] w-[520px] absolute bottom-2" 
              style={{background: "linear-gradient(180deg, #5A89EA 0%, #030303 100%)", 
                boxShadow: "inset 0px -12.48px 16.64px rgba(0, 0, 0, 0.25)",
                borderRadius: "0px 0px 60.9221px 60.9221px"}}></div>
            <div className="w-[325px] h-[592px] z-10">
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
    <div className= "h-[840px] flex flex-col justify-center bg-[#5A89EA]" style={{ backgroundImage : 'url(./Union.png)'}}>
      <div className='w-[60%] mx-auto flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center'>
          <h3 className='text-white text-[62px] leading-[65px] font-semibold text-center mb-[38px]'>Private seller? <br/> We got your back</h3>
          <p className='text-white w-[470px] mb-[36px] text-center'>
          Want to sell your current car? Put it on Dealr, schedule appointments and take advantage of our integrated financing engine.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-6 gap-5 w-[1082px] mx-auto'>
            <div className='bg-white w-[172px] h-[190px] rounded-md p-[17px] flex flex-col gap-[6px]'>
              <div className='w-[22.5px] h-[22.5px] bg-black'></div>
              <h4 className="text-[#030303] text-[20px] uppercase">verified buyers</h4>
              <p className='text-[#030303] text-[14px]'>Secure and verified registration</p>
            </div>
            <div className='bg-white w-[172px] h-[190px] rounded-md p-[17px] flex flex-col gap-[6px]'>
              <div className='w-[22.5px] h-[22.5px] bg-black'></div>
              <h4 className="text-[#030303] text-[20px] uppercase">no time wasters</h4>
              <p className='text-[#030303] text-[14px]'>Buyers undergo a credit check before to be able to book a test drive</p>
            </div>
            <div className='bg-white w-[172px] h-[190px] rounded-md p-[17px] flex flex-col gap-[6px]'>
              <div className='w-[22.5px] h-[22.5px] bg-black'></div>
              <h4 className="text-[#030303] text-[20px] uppercase">scheduling</h4>
              <p className='text-[#030303] text-[14px]'>Set test drive scheduling</p>
            </div>
            <div className='bg-white w-[172px]  rounded-md p-[17px] flex flex-col gap-[6px]'>
              <div className='w-[22.5px] h-[22.5px] bg-black'></div>
              <h4 className="text-[#030303] text-[20px] uppercase">easy upload</h4>
              <p className='text-[#030303] text-[14px]'>Add a car ad in minutes via our extensive database of car models</p>
            </div>
            <div className='bg-white w-[172px] h-[190px] rounded-md p-[17px] flex flex-col gap-[6px]'>
              <div className='w-[22.5px] h-[22.5px] bg-black'></div>
              <h4 className="text-[#030303] text-[20px] uppercase">geo-located</h4>
              <p className='text-[#030303] text-[14px]'>Notifications to Geo-located opportunities</p>
            </div>
            <div className='bg-white w-[172px] h-[190px] rounded-md p-[17px] flex flex-col gap-[6px]'>
              <div className='w-[22.5px] h-[22.5px] bg-black'></div>
              <h4 className="text-[#030303] text-[20px] uppercase">CHAT IN A TAP</h4>
              <p className='text-[#030303] text-[14px]'>Direct messaging with buyer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Dealerships = () => {
  return (
    <div className='bg-black'>
      <div className='w-[60%] mx-auto flex flex-col justify-center items-center'>
        <div className='my-[108px] flex flex-col justify-center'>
          <p className='text-white text-[24px] mb-[5px] text-center uppercase'>Why Dealr?</p>
          <h3 className='text-white text-[48px] font-semibold text-center mb-[38px]'>For Dealerships</h3>
          <p className='text-white w-[470px] mb-[36px]'>
            If you are a professional, we offer a desktop admin platform, to allow a better and faster management of your whole business
          </p>
          <button className='bg-blue-500 text-white w-[364px] h-[55px] rounded-md mx-auto'>Request a demo</button>
        </div>
        <div>
          <div className='grid grid-cols-4 gap-5 w-[772px] mx-auto z-10'>
            <div className='bg-white w-[172px] h-[160px] rounded-md p-[17px] flex flex-col gap-[6px]'>
              <div className='w-[22.5px] h-[22.5px] bg-black'></div>
              <h4 className="text-[#030303] text-[20px] uppercase">integrated</h4>
              <p className='text-[#030303] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className='bg-white w-[172px] h-[160px] rounded-md p-[17px] flex flex-col gap-[6px]'>
              <div className='w-[22.5px] h-[22.5px] bg-black'></div>
              <h4 className="text-[#030303] text-[20px] uppercase">organized</h4>
              <p className='text-[#030303] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className='bg-white w-[172px] h-[160px] rounded-md p-[17px] flex flex-col gap-[6px]'>
              <div className='w-[22.5px] h-[22.5px] bg-black'></div>
              <h4 className="text-[#030303] text-[20px] uppercase">bulk actions</h4>
              <p className='text-[#030303] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className='bg-white w-[172px] h-[160px] rounded-md p-[17px] flex flex-col gap-[6px]'>
              <div className='w-[22.5px] h-[22.5px] bg-black'></div>
              <h4 className="text-[#030303] text-[20px] uppercase">geo-located</h4>
              <p className='text-[#030303] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
          <div className="-mt-[50px] -z-10">
            <Image src='/MacbookPro2021.png' alt="app demo" width={1180} height={570} />
          </div>
        </div>
      </div>
    </div>
  )
}

const Section4 = () => {
  return( 
  <div className='w-[60%] mx-auto'>
    <div>
      <div className=''>
        <div className='grid grid-cols-2 gap-10 items-center justify-center'>
          <div className='w-full flex flex-col justify-center items-center'>
              <div className='w-[520px] mx-auto flex flex-col justify-center'>
                <h3 className="text-[24px] leading-[29px] mb-[25px] uppercase">
                something goes wrong?
                </h3>
                <p className='text-[48px] leading-[105%] mb-[25px]'>
                Immediate armed response.
                </p>
                <p className="text-[24px] leading-[140%]">If for any reason something goes wrong, both buyer and seller can use the panic button and get instant armed response by AURA security services. Stay safe with Dealr.</p>
              </div>
              <div className='flex justify-between items-center w-[293.32px] mx-auto mt-[25px]'>
            <div className='w-[125.82px] h-[42px] rounded-xl'>
              <Image src="/AppStoreBadge.png" alt="Download from the apple app store" width="126" height="42" />
            </div>
            <div className='w-[141.82px] h-[42px] rounded-xl'>
              <Image src="/GooglePlay.png" alt="Download from the android play store" width="142" height="42" />
            </div>
          </div>
            </div>
          <div className='w-full flex justify-center items-center flex-col relative'>
              <div className="w-[470px]">
                <Image src="/app2.png" width={470} height={68} alt="app photo" />
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}
