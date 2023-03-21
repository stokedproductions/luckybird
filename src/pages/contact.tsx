import { Dealerships } from '@/components/Dealership'
import ContactForm from '@/components/ContactForm'
import React, { useEffect, useState } from 'react'

const Contact = () => {
  return (
    <div>
      <ContactForm />
      {/* <Dealerships /> */}
      {/* <Articles /> */}
    </div>
  )
}

export default Contact




const Articles = () => {
  const [articleList, setArticleList] = useState(null)
  const [loading, setLoading] = useState(true)

  const getArticles = async () => {
    const sub = await fetch('')
  }

  useEffect(() => {}, [])
  return (
    <div className="py-20 bg-black">
      <div>
        <div className="mx-auto w-[60%]">
          <h4 className="text-white">Articles</h4>
          <h4 className="text-white">Articles</h4>
          <h4 className="text-white">Articles</h4>
        </div>
      </div>
    </div>
  )
}
