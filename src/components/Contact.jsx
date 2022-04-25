import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';


const ContactDetail = ({icon, name, value, link}) => (
  <article className="contact__option">
    {icon}
    <h4>{name}</h4>
    <h5>{value}</h5>
    <a href={link}>Send a message</a>
  </article>
);

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('service_3r4gi7r', 'template_wlms03k', form.current, 'I1ZZD4jzQ2gmBSTXN')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    alert("I ask you don't send msg, you blind or wut");

    e.target.reset();
  };

  return (
    <section id='contact' className='pt-5'>
      <h5 className='pt-5'>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options d-flex flex-column gap-2">
          <ContactDetail icon={<HiOutlineMail className='contact__option-icon' />} name='Email' value='giraffe@gmail.com'
            link='#' />
          <ContactDetail icon={<RiMessengerLine className='contact__option-icon' />} name='Messenger' value='Giraffe Cheong'
            link='#' />
          <ContactDetail icon={<BsWhatsapp className='contact__option-icon' />} name='WhatsApp' value='y u wan my h/p'
            link='#' /> 
            {/* https://api.whatsapp.com/send?phone={0123456789} */}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Dont Send Message please' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact