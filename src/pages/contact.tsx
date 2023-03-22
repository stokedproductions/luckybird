import { Dealerships } from '@/components/Dealership'
import ContactForm from '@/components/ContactForm'
import React, { useEffect, useState } from 'react'
import Articles from '@/components/Articles'

const Contact = () => {
  return (
    <div>
      <ContactForm />
      <Dealerships />
      <Articles />
    </div>
  )
}

export default Contact
