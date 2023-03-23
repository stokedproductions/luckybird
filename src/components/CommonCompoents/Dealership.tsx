import Image from 'next/image'
import Link from 'next/link'
import IconCard from './BlueIconCard'

interface dealershipType {
  isForHome?: boolean
}

export const Dealerships: React.FC<dealershipType> = ({ isForHome }) => {
  return (
    <div
      id="dealerships"
      className={`${
        isForHome
          ? ' xl:-mt-[172px] h-[50%] lg:h-[1380px] pb-[0]'
          : ' h-[1150px] lg:-mt-[172px] lg:h-[1255px]'
      } 
      black-bg`}
    >
      <div className="w-full">
        <div className="relative">
          <div className="mx-auto flex w-[95] flex-col items-center justify-center lg:w-[60%]">
            {isForHome && (
              <div className="my-[108px] flex flex-col justify-center">
                <p className="mb-[5px] text-center text-[24px] uppercase text-white">
                  Why Dealr?
                </p>
                <h3 className="mb-[38px] text-center text-[48px] font-semibold text-white">
                  For Dealerships
                </h3>
                <p className="mx-auto mb-[36px] w-[95%] text-center text-white lg:w-[470px] lg:text-left">
                  If you are a professional, we offer a desktop admin platform,
                  to allow a better and faster management of your whole business
                </p>
                <Link
                  href="/contact"
                  className="mx-auto flex h-[55px] w-[364px] items-center justify-center rounded-md bg-blue-500"
                >
                  <p className=" font-poppins text-[24px] font-bold text-white">
                    Request a demo
                  </p>
                </Link>
              </div>
            )}
            <div className={`${isForHome ? '' : 'mt-[50px] lg:mt-[358px]'}`}>
              <div className="mx-auto grid w-[95%] grid-cols-2 gap-5 px-5 lg:w-[772px] lg:grid-cols-4 lg:px-0">
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
              <div
                className="-z-10 mx-auto mt-10 w-[90%] lg:-mt-[90px]"
                style={{ aspectRatio: 1180 / 570 }}
              >
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
