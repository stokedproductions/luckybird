import Image from 'next/image'
import React from 'react'

interface blueIconCardtyep {
  title: String
  description: String
}

const IconCard = (props: blueIconCardtyep) => {
  return (
    <div className="z-50 flex w-[172px] flex-col items-start gap-[6px] rounded-md bg-white p-[17px]">
      <Image src="/icon-blue.svg" width={48} height={47} alt="Icon" />
      <h4 className="mt-[17px] font-bebas text-[20px] uppercase text-[#030303]">
        {props.title}
      </h4>
      <p className="mt-[6px] text-[14px] text-[#030303]">{props.description}</p>
    </div>
  )
}

export default IconCard
