import { Dealerships } from '@/components/CommonCompoents/Dealership'
import ContactForm from '@/components/ContactPageComponents/ContactForm'
import React, { useEffect, useState } from 'react'
import Articles from '@/components/ContactPageComponents/Articles'

const Contact = () => {
  return (
    <div className='bg-black'>
      <ContactForm />
      <Dealerships />
      <Articles />
    </div>
  )
}

export default Contact
