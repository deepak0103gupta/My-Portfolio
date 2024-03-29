"use client";
import React from 'react'
import GithubIcon from "../../../public/github-icon.svg"
import LinkedinIcon from "../../../public/linkedin-icon.svg"
import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'react-toastify';

function EmailSection() {
    function submitHandler(event) {
        event.preventDefault();
        toast.success('Message Sent Successfully!');
    }
  return (
    <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div>
            <h5 className='text xl font-bold text-white my-2'>
                Let&apos;s Connect
            </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="https://github.com/deepak0103gupta">
                    <Image src={GithubIcon} alt="Github Icon" />
                </Link>
                <Link href="https://www.linkedin.com/in/deepak0103/">
                    <Image src={LinkedinIcon} alt="LinkedIn Icon" />
                </Link>
            </div>
        </div>
        <div>
            <form onSubmit={submitHandler} className='flex flex-col'>
                <div className='mb-6'>
                    <label htmlFor='email' className='text-white block mb-2  text-sm font-medium '>
                        Your email
                    </label>
                    <input 
                        type='email'
                        id='email'
                        required
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='xyz@gmail.com'
                        />
                </div>

                <div className='mb-6'>
                    <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium '>
                        Subject
                    </label>
                    <input 
                        type='text'
                        id='subject'
                        required
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='Just Saying Hii!'
                        />
                </div>

                <div className='mb-6'>
                    <label htmlFor='message' className='text-white block mb-2 text-sm font-medium '>
                        Message
                    </label>
                    <textarea 
                        name='message'
                        id='message'
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='Leave Your Message.....'
                        />
                </div>

                <button  type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                    Send Message
                </button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection