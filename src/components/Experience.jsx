import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const ExperienceDetail = ({ title, proficiency }) => (
  <article className='d-flex'>
    <BsFillPatchCheckFill className='experience__icon mt-2' />
    <div className='ps-2 w-100 d-flex flex-column justify-content-center align-items-center'>
      <h4>{title}</h4>
      <small className='text-light ps-2'>{proficiency}</small>
    </div>
  </article>
);

const Experience = () => {
  return (
    <section id='experience' className='pt-5'>
      <h5 className='pt-5'>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>废 skills</h3>
          <div className="experience__content">
            <ExperienceDetail title="Sleep" proficiency="Advanced" />
            <ExperienceDetail title="Eat" proficiency="Intermediate" />
            <ExperienceDetail title="Play" proficiency="Intermediate" />
            <ExperienceDetail title="Kind" proficiency="None" />
            <ExperienceDetail title="Giraffe" proficiency="Intermediate" />
          </div>
        </div>

        <div className="experience__backend">
          <h3>Serious Skills</h3>
          <div className="experience__content">
            <ExperienceDetail title="I" proficiency="Intermediate" />
            <ExperienceDetail title="Don't" proficiency="Intermediate" />
            <ExperienceDetail title="Know" proficiency="Intermediate" />
            <ExperienceDetail title="Sial" proficiency="Intermediate" />
            <ExperienceDetail title="Lmao" proficiency="Intermediate" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience