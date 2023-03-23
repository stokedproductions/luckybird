import React from 'react'
import IconCard from '../CommonCompoents/BlueIconCard'

const Sellers = () => {
    return (
        <div id="sellers" className="bg-gradient-to-b from-[#5A89EA] to-black">
          <div
            className="flex w-full flex-col"
            style={{ aspectRatio: 1920 / 1000, backgroundImage: 'url(./dealer-top.svg), url(./Union.png)', 
            backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom center, top center' }}
          >
            <div className="mx-auto mt-[198px] flex flex-col items-center justify-center">
              <div className="flex flex-col justify-center">
                <h3 className="mb-[38px] text-center font-poppins text-[50px] font-semibold leading-[105%] text-white lg:text-[62px]">
                  Private seller? <br /> We got your back
                </h3>
                <p className="mb-[36px] text-center font-poppins text-[16px] leading-[22.4px] text-white lg:w-[470px]">
                  Want to sell your current car? Put it on Dealr, schedule
                  appointments and take advantage of our integrated financing
                  engine.
                </p>
              </div>
              <div>
                <div className="mx-auto grid grid-cols-2 gap-5 px-5 pb-10 lg:grid-cols-6 lg:px-0 lg:pb-0">
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

export default Sellers