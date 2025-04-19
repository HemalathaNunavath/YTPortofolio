import React from 'react'
import imgportfolio from '../assets/imgportfolio.png'
import Appoinment from '../assets/Appoinment.png'
import usermanagement from '../assets/usermanagement.png'
import Jobbyapp from '../assets/Jobbyapp.png'
import matchgame from '../assets/matchgame.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Portfolio',
          desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
          image: imgportfolio,
          live: "https://hema-portfolio-uij3-git-main-hemalathanunavaths-projects.vercel.app/",
          // github: "https://github.com/rohitsingh93300/portfolio"
        },
        {
          title: 'Appointment',
          desc: 'Book appointments hassle-free with our easy-to-use scheduling platform. Stay organized and never miss a meeting!',
          image: Appoinment,
          live: "https://hemalathaapp.ccbp.tech/"
          // github: "https://hemalathaapp.ccbp.tech/"
        },
        {
          title: 'User Management',
          desc: 'Effortlessly manage users with secure access control and role-based permissions. Simplify user onboarding and administration!',
          image: usermanagement,
          live: "https://user-dashboard-git-main-hemalathanunavaths-projects.vercel.app/",
          // github: "https://github.com/HemalathaNunavath/user_dashboard.git"
        },
        {
          title: 'Jobby App',
          desc: 'Find your dream job with Jobby App—quick, easy, and tailored to your skills. Connect with top employers and start your career today!',
          image:Jobbyapp,
          live: "https://hemajobby.ccbp.tech/",
          github: "#"
        },
        {
          title: 'Match Game',
          desc: 'Bridge the gap between opportunities and talent with smart matching. Connect effortlessly and find the perfect fit!',
          image: matchgame,
          live: "https://appmatch.ccbp.tech/",
          // github: "https://github.com/rohitsingh93300/supercars"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
