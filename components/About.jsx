import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who Are We</h2>
          <p className='py-2 text-gray-600'>
            / / We are not your average developers
          </p>
          <p className='py-2 text-gray-600'>
            We (Ace & Levi) have always had a knack for
            technology and working with computers as well as making games, In 2020, We started working
            with HTML and CSS to make some minor edits on a small about of a game
            website that we were operating. What we thought was just a few small
            edits turned into a love for developing and modeling on Roblox.
          </p>
          <p className='py-2 text-gray-600'>
            Fascinated with how intricate programming can be we were quickly drawn
            to learn more. Ace started learning javascript and was even more
            enthused with making websites interactive. Levi then started
            learning to make roblox games and here we are, our very first creation; AliveHood.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of our other projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
