import React from 'react';
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";


const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat turpis id nibh vulputate interdum. Donec eu lectus sem. Vestibulum et finibus ex, in dictum quam. Suspendisse odio lacus, rutrum in tortor in, bibendum tincidunt mauris. Nulla facilisi. Nunc a purus fringilla, ornare odio vitae, aliquet metus.</p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Email Address' />
          <button type="button">Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} />
          <p>1600 people requested access to visit in the last 24 hours</p>
        </div>

      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt='ai' />
      </div>
    </div>
  )
}

export default Header