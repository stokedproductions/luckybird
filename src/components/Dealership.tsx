import Image from 'next/image'
import IconCard from './iconCard'

export const Dealerships = () => {
  return (
    <div
      className="-mt-[162px] h-[1455px]"
      style={{
        background:
          'linear-gradient(180deg, #00000000 0%, #000000ff 12%, #000000ff 100%',
      }}
    >
      <div className="relative h-[268px] w-full">
        <Image src="/dealer-top.svg" alt="bg" fill className="absolute" />
        <div className="-mt-150px relative">
          <div className="mx-auto flex w-[60%] flex-col items-center justify-center">
            <div className="my-[108px] flex flex-col justify-center">
              <p className="mb-[5px] text-center text-[24px] uppercase text-white">
                Why Dealr?
              </p>
              <h3 className="mb-[38px] text-center text-[48px] font-semibold text-white">
                For Dealerships
              </h3>
              <p className="mb-[36px] w-[470px] text-white">
                If you are a professional, we offer a desktop admin platform, to
                allow a better and faster management of your whole business
              </p>
              <button className="mx-auto h-[55px] w-[364px] rounded-md bg-blue-500 text-white">
                Request a demo
              </button>
            </div>
            <div className="">
              <div className="mx-auto grid w-[772px] grid-cols-4 gap-5">
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
              <div className="-z-10 -mt-[90px]">
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
