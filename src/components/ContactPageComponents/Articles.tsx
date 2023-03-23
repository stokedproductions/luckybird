import React, { useEffect, useState } from 'react'
import { StringLiteral } from 'typescript'

interface Story {
  id: string
  title: string
  url: string
}

interface ArticleType {
  title: string
  link: string
  index: number
}

const ArticleCard: React.FC<ArticleType> = ({ title, link, index }) => {
  return (
    <li className="font-poppins text-[24px] font-bold text-white">
      <a href={link}>
        {index}. {title}
      </a>
    </li>
  )
}

const Articles = () => {
  const [stories, setStories] = useState<Story[]>([])
  const getStories = async () => {
    const url = '/api/getArticles'
    const response = await fetch(url)
    if (response) {
      const json = await response.json()
      setStories(json['stories'])
    }
  }

  useEffect(() => {
    getStories()
  }, [])
  return (
    <div className="bg-black">
      <ul className="mx-auto w-[95%] lg:w-[60%]">
        {stories.map((story, index) => (
          <ArticleCard
            key={story.id}
            title={story.title}
            link={story.url}
            index={index + 1}
          />
        ))}
      </ul>
    </div>
  )
}

export default Articles
