import React from 'react'
import avatar1 from '../assets/avatar1.jpg'
import avatar2 from '../assets/avatar2.jpg'
import avatar3 from '../assets/avatar3.jpg'
import avatar4 from '../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const testimonials = [ // Testimonial data
	{
		avatar: avatar1,
		name: 'lim jy',
		review: 'Anyone interested in developing a weird weird or serious web pg for ur bf gf family friends uncle aunties come find me o, i hlp u build, u juz gimme feedback will do. tenks bro sis uncle aunties. Enjoy ur day',
	}, 
	{
		avatar: avatar2,
		name: 'Aivy Friend 2',
		review: 'Giraffe is a cool person, her aim is to reach 190cm by next year. I support her. Giraffe is a cool person, her aim is to reach 190cm by next year. I support her.',
	}, 
	{
		avatar: avatar3,
		name: 'Aivy Friend 3',
		review: 'Giraffe is a cool person, her aim is to reach 190cm by next year. I support her. You should too. Giraffe is a cool person, her aim is to reach 190cm by next year. I support her.',
	}, 
	{
		avatar: avatar4,
		name: 'Aivy Friend 4',
		review: 'Giraffe is a cool person, her aim is to reach 190cm by next year. I support her. You should too. Giraffe is a cool person, her aim is to reach 190cm by next year. I support her.',
	}, 
];


const Testimonials = () => {
  return (
    <section id='testimonials' className='pt-5'>
      <h5 className='pt-5'>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="w-75 testimonials__container pb-5"
        modules={[Pagination]} spaceBetween={40} slidesPerView={1} pagination={{ clickable: true }}>
        {
          testimonials.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials