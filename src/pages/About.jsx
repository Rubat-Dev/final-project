
import React from 'react'

const About = () => {
    const teamMembers = [
             { name: "Alice Johnson", role: "Frontend Developer", image: "/alice.jpeg" },
             { name: "David Smith", role: "Backend Developer", image: "/david.jpeg" },
             { name: "Sophie Lee", role: "UI/UX Designer", image: "/sophie.jpeg" },
             { name: "Michael Brown", role: "Project Manager", image: "/michael.jpeg" },
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
