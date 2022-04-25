import React from 'react'
import cv from '../assets/cv.pdf'
import me from '../assets/me-ori.png'
import { BsLinkedin, BsYoutube } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

const Welcome = () => {
  return (
  <section className="welcome pt-5 overflow-hidden">
        <div className="container pt-5 text-center h-100 position-relative">
            <h5 className='pt-sm-4'>Hello tuan-tuan & puan-puan</h5>
            <h1>TODAY IS MY BIRTHDAY. PLEASE WISH!</h1>
            <h5 className="text-light">Aivy Giraffe Cheong</h5>

            {/* CTA */}
            <div className="mt-4 d-flex justify-content-center">
              <a href={cv} className="btn mx-2" download>My Ugly Pics</a>
              <a href="#contact" className='btn btn-primary mx-2'>Apalumau</a>
            </div>

            {/* Socials */}
            <div className="welcome__socials d-none d-sm-flex flex-column align-items-center">
              <a href="https://www.instagram.com/aivyyy.y/" target="_blank"><AiFillInstagram /></a>
              <a href="https://youtu.be/dQw4w9WgXcQ/" target="_blank"><BsYoutube /></a>
              <a href="https://youtu.be/dQw4w9WgXcQ/" target="_blank"><BsLinkedin /></a>
            </div>

            <div className="me mt-5 overflow-hidden">
              <img src={me} alt="me" />
            </div>

            <a href="#contact" className='scroll__down d-none d-sm-block'>Scroll Down</a>
        </div>
    </section>
  )
}

export default Welcome