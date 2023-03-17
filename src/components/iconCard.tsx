import Image from 'next/image'
import React from 'react'

interface blueIconCardtyep {
    title: String
    description: String
  }

const IconCard = (props:blueIconCardtyep) => {
    return (
        <div className="flex w-[172px] flex-col items-start gap-[6px] rounded-md bg-white p-[17px] z-50">
            <Image src="/icon-blue.svg" width={48} height={47} alt="Icon" />
            <h4 className="text-[20px] uppercase text-[#030303] mt-[17px] font-bebas">
            {props.title}
            </h4>
            <p className="text-[14px] text-[#030303] mt-[6px]">
            {props.description}
            </p>
        </div>
    )
}

export default IconCard