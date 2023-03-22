// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string[]
}

const getAricleIDs = async () => {
  try {
    const articleIDFetch = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const apiResponse = await articleIDFetch.json();
    console.log('Got it');
    return apiResponse.slice(0, 3);
  } catch {
    console.log('Something went wrong');
    return [];
  }
}

const getStory = async (id:string) => {
  const storyFetch = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  return await storyFetch.json();
}

const getStories = async (ids: string[]) => {
  const url = 'https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty'
  if (ids.length === 0) return [];

  const storyies = []
  for await (const id of ids) {
    const story = await getStory(id);
    storyies.push(story);
  }
  return storyies;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const articleIDS = await getAricleIDs()
  const stories = await getStories(articleIDS);
  res.status(200).json({ articleIDS, stories })
}
