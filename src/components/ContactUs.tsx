"use client"
import { sendContact } from '@/services/contact.service';
import { IContactFormData } from '@/types/services';
import React, { FormEvent } from 'react';

const ContactUs = () => {

    async function onSubmit( event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);

        console.log(formData)

        const form: IContactFormData = {
            name: formData.get('name') as string,
            lastname: formData.get('lastname') as string,
            mail: formData.get('mail') as string,
            details: formData.get('details') as string
        };

        console.log(form)

        const result = await sendContact(form);

        console.log(result);
    }

  return (

    <div className='contactus-form__container'>
        <div className='contactus-form__title'>
            <h2 className='font-bold text-2xl mb-4'>
                Get In Touch
            </h2>
            <span className='font-extralight'>
                Have any questions or comments? Use this form to contact me at any time.
            </span>

        </div>
        <form action="submit" onSubmit={onSubmit}>
            <div className='flex flex-col w-full m-4 md:px-20 justify-center text-left'>
                <span className='contactus-form__input_title'>Name</span> 
                <input className='contactus-form__input' name='name' title='Name' type="text" required/>
                <span className='contactus-form__input_title'>Last Name</span>
                <input className='contactus-form__input' name="lastname" title='Last Name' type="text" required />
                <span className='contactus-form__input_title'>Mail</span>
                <input className='contactus-form__input' name="mail" title='mail' type="mail" required/>
                <span className='contactus-form__input_title'>Message</span>
                <textarea className='contactus-form__text-area' name="details" maxLength={500}title='description' required />
                <div className='my-8 w-full text-center justify-end'>
                    <button className='contactus-submit-button' type='submit'>Submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ContactUs