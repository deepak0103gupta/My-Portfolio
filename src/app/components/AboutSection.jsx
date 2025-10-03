"use client";
import React, {useTransition, useState} from 'react'
import Image from "next/image";
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title:"Skills",
    id:"skills",
    content:(
      <div className='flex flex-row gap-8 '>
        <ul className='list-disc pl-2'>
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind CSS</li>
          <li>Java Script</li>
        </ul>
        <ul className='list-disc pl-2'> 
          <li>React Js</li>
          <li>Java</li>
          <li>C++</li>
          <li>Machine Learning</li>
        </ul>
        <ul className='list-disc pl-2'> 
          <li>Angular</li>
          <li>Spring Boot</li>
          <li>MySQL</li>
          <li>Power Apps</li>
        </ul>
      </div>
    )
  },
  {
    title:"Education",
    id:"education",
    content: (
      <div>
        <ul className='list-disc pl-2'>
          <li>Bachelor&apos;s of Engineering</li>
          <p className='text-[#ADB7BE]'>Terna Engineering College</p>
          
        </ul>
        <ul className='list-disc pl-2'>
          <li>Higher Secodnary Education</li>
          <p className='text-[#ADB7BE]'>Vani Vidyalaya</p>
          
        </ul>
        <ul className='list-disc pl-2'>
          <li>Secodnary Education</li>
          <p className='text-[#ADB7BE]'>Vani Vidyalaya</p>
          
        </ul>        
      </div>

    )
  },
  {
    title:"Experience",
    id:"experience",
    content: (
      <div>
        <ul className='list-disc pl-2'>
          <li>Software Engineer</li>
          <p className='text-[#ADB7BE]'>LTIMindtree (April 2024 to Working...)</p>
        </ul>       
        <ul className='list-disc pl-2'>
          <li>Java Devlopment</li>
          <p className='text-[#ADB7BE]'>LTIMindtree (March 2023 to May 2023)</p>
        </ul>       
        <ul className='list-disc pl-2'>
          <li>Machine Learning Intern</li>
          <p className='text-[#ADB7BE]'>Knowledge Solutios India (June 2021 to August 2021)</p>
        </ul>       
      </div>
    )
  },

]


function AboutSection() {
  const[tab,setTab] = useState("skills");
  const[isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }
  return (
    <section id='about' className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src='/images/about-image.png' width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                As a recent graduate in Bachelor of Engineering from Terna Engineering College, I am deeply passionate about computer science, machine learning, and web development. With a strong foundation in these areas, I have cultivated a diverse skill set that encompasses programming languages, algorithms, and front-end technologies. Through hands-on projects and academic coursework, I have honed my abilities to analyze complex problems, develop innovative solutions, and collaborate effectively in team environments. I am eager to leverage my expertise and continue learning in dynamic roles that push the boundaries of technology and innovation.                
                </p>
                <div className='flex flex-row mt-8'>
                  <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                    Skills
                  </TabButton>
                  <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                    Education
                  </TabButton>
                  <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                    Experience
                  </TabButton>
                </div>
                <div className='mt-8'>
                  {
                    TAB_DATA.find((t) => t.id === tab).content
                  }
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection

