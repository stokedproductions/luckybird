import Image from 'next/image'
import Link from 'next/link'
import IconCard from './IconCard'

interface dealershipType {
  isForHome?: boolean;
}

export const Dealerships:React.FC<dealershipType> = ({isForHome}) => {
  return (
    <div
      id="dealerships"
      className={`${isForHome ? "lg:-mt-[172px] h-[1350px] lg:h-[1455px] " : " lg:-mt-[342px] h-[1150px] lg:h-[1255px] "} black-bg`}
    >
      <div className="w-full">
        <div className='absolute w-full' style={{aspectRatio: 1920/268}}>
          <Image src="/dealer-top.svg" alt="bg" fill className="absolute" />
        </div>
        <div className="relative">
          <div className="mx-auto flex w-[95] lg:w-[60%] flex-col items-center justify-center">
            {isForHome && 
              (<div className="my-[108px] flex flex-col justify-center">
                <p className="mb-[5px] text-center text-[24px] uppercase text-white">
                  Why Dealr?
                </p>
                <h3 className="mb-[38px] text-center text-[48px] font-semibold text-white">
                  For Dealerships
                </h3>
                <p className="mb-[36px] w-[95%] mx-auto lg:w-[470px] text-white text-center lg:text-left">
                  If you are a professional, we offer a desktop admin platform, to
                  allow a better and faster management of your whole business
                </p>
                <Link href="/contact" className="mx-auto h-[55px] w-[364px] rounded-md bg-blue-500 flex justify-center items-center">
                  <p className=" text-white font-poppins font-bold text-[24px]">Request a demo</p>
                </Link>
              </div>)}
            <div className={`${isForHome ? "" : "mt-[358px]"}`}>
              <div className="mx-auto grid w-[95%] lg:w-[772px] grid-cols-2 lg:grid-cols-4 gap-5 px-5 lg:px-0">
                <IconCard
                  title="integrated"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <IconCard
                  title="organized"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <IconCard
                  title="bulk actions"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <IconCard
                  title="geo-located"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </div>
              <div className="-z-10 mt-10 lg:-mt-[90px] w-[90%] mx-auto" style={{aspectRatio: 1180/570}}>
                <Image
                  src="/MacbookPro2021.png"
                  alt="app demo"
                  width={1180}
                  height={570}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
