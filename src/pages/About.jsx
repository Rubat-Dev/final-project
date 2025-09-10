
import React from 'react'

const About = () => {
    const teamMembers = [
             { name: "Alice Johnson", role: "Frontend Developer", image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
             { name: "David Smith", role: "Backend Developer", image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
             { name: "Sophie Lee", role: "UI/UX Designer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
             { name: "Michael Brown", role: "Project Manager", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
           ];
  return (
    <div className='min-h-screen bg-gray-900 text-white px-4 md:px-10 py-12'>
      <h1 className="text-4xl font-bold mb-6 text-center">About Movie Explorer</h1>
       <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto">
         Movie Explorer is a premium movie discovery platform built using React, Axios, and Tailwind CSS. 
         Explore trending movies, browse by genre, and get detailed movie information in one place.
       </p>
       <h2 className="text-3xl font-semibold mb-4 text-center">Meet the Team</h2>
       <div className="flex flex-wrap justify-center gap-6 mt-6">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg w-64 text-center">
            <div className="h-32 w-32 bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover"/>
            </div>
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gray-300">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
