import React from 'react'
import { SCREENSHOT } from '../utils/constants'

const About = () => {
  return (
    <div className='about-us mt-[70px] px-4 md:px-24'>
      <h1 className='text-5xl text-white text-center mb-4 font-bold'>About NetflixGPT</h1>
      <p className='text-gray-400 mb-8 text-center'>

        
        "Experience NetflixGPT: A Feature-Rich, Mobile-Friendly Netflix Clone with Cutting-Edge Tech Stack! 🚀
        <br />
        <br />
        Dive into NetflixGPT, a meticulously crafted Netflix clone boasting a stellar tech stack, including React, Redux, Webpack, React Router, TMDB APIs, Tailwind CSS, Firebase, React-DOM, and Jest. This powerhouse combination delivers a web application designed for peak performance and effortless user interactions

        NetflixGPT is fully optimized to ensure lightning-fast load times and an ultra-smooth user experience, making it perfect for both desktop and mobile devices. Enjoy a user-friendly interface that offers an immersive viewing experience, all in the palm of your hand.

        <br />
        <br />

        Join me in exploring the future of web development, where innovation meets user-centric design to create NetflixGPT—a shining example of what's possible in the world of entertainment.
      </p>

      <div className='mb-8 text-gray-200'>
        Github: <a href='https://github.com/TejaYeshamoni/NetflixGPT-TEJ' className='hover:text-blue-700 ml-3 text-blue-600 text-sm' target='_blank' rel='noreferrer'>NetflixGPT</a>
        <br />
        Live Demo: <a href='' target='_blank' className='hover:text-blue-700 ml-3 text-blue-600 text-sm' rel='noreferrer'>Live Demo</a>
        <br></br>
        Linkedin: <a href='www.linkedin.com/in/teja-yeshamoni/' className='hover:text-blue-700 ml-3 text-blue-600 text-sm' target='_blank' rel='noreferrer'>Neeraj Singh</a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className='screen rounded overflow-hidden shadow-xl'>
          <a href={SCREENSHOT.landing} target="_blank" rel="noreferrer">
            <img src={SCREENSHOT.landing} className='w-full hover:scale-110' style={{ transition: '0.9s' }} alt='Landing Page' />
          </a>
        </div>
        <div className='screen rounded overflow-hidden shadow-xl'>
          <a href={SCREENSHOT.signin} target="_blank" rel="noreferrer">
            <img src={SCREENSHOT.signin} className='w-full hover:scale-110' style={{ transition: '0.9s' }} alt='Signin Page' />
          </a>
        </div>
        <div className='screen rounded overflow-hidden shadow-xl'>
          <a href={SCREENSHOT.signup} target="_blank" rel="noreferrer">
            <img src={SCREENSHOT.signup} className='w-full hover:scale-110' style={{ transition: '0.9s' }} alt='Signup Page' />
          </a>
        </div>
        <div className='screen rounded overflow-hidden shadow-xl'>
          <a href={SCREENSHOT.browse} target="_blank" rel="noreferrer">
            <img src={SCREENSHOT.browse} className='w-full hover:scale-110' style={{ transition: '0.9s' }} alt='Browse Page' />
          </a>
        </div>
        <div className='screen rounded overflow-hidden shadow-xl'>
          <a href={SCREENSHOT.movieList} target="_blank" rel="noreferrer">
            <img src={SCREENSHOT.movieList} className='w-full hover:scale-110' style={{ transition: '0.9s' }} alt='Movie List Page' />
          </a>
        </div>
        <div className='screen rounded overflow-hidden shadow-xl'>
          <a href={SCREENSHOT.search} target="_blank" rel="noreferrer">
            <img src={SCREENSHOT.search} className='w-full hover:scale-110' style={{ transition: '0.9s' }} alt='Search Page' />
          </a>
        </div>
        <div className='screen rounded overflow-hidden shadow-xl'>
          <a href={SCREENSHOT.shimmer} target="_blank" rel="noreferrer">
            <img src={SCREENSHOT.shimmer} className='w-full hover:scale-110' style={{ transition: '0.9s' }} alt='Shimmer UI loading' />
          </a>
        </div>
        <div className='screen rounded overflow-hidden shadow-xl'>
          <a href={SCREENSHOT.watch} target="_blank" rel="noreferrer">
            <img src={SCREENSHOT.watch} className='w-full hover:scale-110' style={{ transition: '0.9s' }} alt='Watch Now Page' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About