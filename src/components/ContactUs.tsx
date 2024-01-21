"use client"

import React from 'react'

const ContactUs = () => {
  return (

    <div className='contactus-form__container'>
        <div className='contactus-form__title'>
            <h2 className='font-bold text-2xl mb-4'>
                Get In Touch
            </h2>
            <span>
                Have any questions or comments? Use this form to contact me at any time.
            </span>

        </div>
        <form action="submit" onSubmit={()=>({})}>
            <div className='flex flex-col w-full m-4 md:px-20 justify-center text-left'>
                <span className='contactus-form__input_title'>Name</span> 
                <input className='contactus-form__input' name='name' title='Name' type="text" required/>
                <span className='contactus-form__input_title'>Last Name</span>
                <input className='contactus-form__input' name="lastname" title='Last Name' type="text" required />
                <span className='contactus-form__input_title'>Mail</span>
                <input className='contactus-form__input' name="mail" title='mail' type="mail" required/>
                <span className='contactus-form__input_title'>Message</span>
                <textarea className='contactus-form__text-area' maxLength={500}title='description' required />
                <div className='my-8 w-full text-center justify-end'>
                    <button className='contactus-submit-button'>Submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ContactUs