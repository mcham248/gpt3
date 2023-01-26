import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05} from './imports';
import "./blog.css";

const articleData = [
  {
    imgUrl: blog01,
    date: 'Sep 26, 2022',
    title:'GPT-3 and Open AI is the future. Let us explore how it is?'
  },
  {
    imgUrl: blog02,
    date: 'Sep 26, 2022',
    title:'GPT-3 and Open AI is the future. Let us explore how it is?'
  },
  {
    imgUrl: blog03,
    date: 'Sep 26, 2022',
    title:'GPT-3 and Open AI is the future. Let us explore how it is?'
  },
  {
    imgUrl: blog04,
    date: 'Sep 26, 2022',
    title:'GPT-3 and Open AI is the future. Let us explore how it is?'
  },
  {
    imgUrl: blog05,
    date: 'Sep 26, 2022',
    title:'GPT-3 and Open AI is the future. Let us explore how it is?'
  },
]

const Blog = () => {
  return (
    <div  className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={articleData[0].imgUrl} date={articleData[0].date} title={articleData[0].title} />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={articleData[1].imgUrl} date={articleData[1].date} title={articleData[1].title} />
          <Article imgUrl={articleData[2].imgUrl} date={articleData[2].date} title={articleData[2].title} />
          <Article imgUrl={articleData[3].imgUrl} date={articleData[3].date} title={articleData[3].title} />
          <Article imgUrl={articleData[4].imgUrl} date={articleData[4].date} title={articleData[4].title} />
        </div>
      </div>
    </div>
  )
}

export default Blog