import React from 'react'
import me from '../assets/me-about.jpeg'
import { FaAward } from 'react-icons/fa'
import { HiLightBulb } from 'react-icons/hi'
import { AiFillFolderOpen } from 'react-icons/ai'


const About = () => {
  return (
    <section id='about' className='pt-5'>
      <h5 className='pt-5'>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container">
        <div className="row">

        <div className="about__me col-7 mb-5 col-lg-4 mb-lg-0 px-0">
          <div className="about__me-img">
            <img src={me} alt="About Image" />
          </div>
        </div>

        <div className="about__content col-11 col-lg-6 offset-lg-2 d-flex flex-column justify-content-center text-center text-md-start">
          
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>20 Years Living Experience</small>
            </article>

            <article className="about__card">
              <HiLightBulb className='about__icon' />
              <h5>Academic</h5>
              <small>Halo, i damn smart k</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>idk</small>
            </article>
          </div>

          <p>
            I don't like ppl post nais pics of me. Next time post ugly pics, thank you.
            Btw, anyone interested in making personal meme website come pm me, i tolong lu,
            am serious.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
        
        </div>
      </div>
    </section>
  )
}

export default About