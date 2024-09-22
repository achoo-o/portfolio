import { useState } from "react"

export default function Main() {

  const projects = [
    {
      name: 'pawpals', 
      description: 'Made as part of the DevAcademy course in a group of 5. Pawpals is a website made to bring pet-lovers together.', 
      link: 'https://pawpals-matai-24.devacademy.nz/',
      thumbnail: 'pawpals.jpg',
      alt: ''
    },
    {
      name: 'Whakataukī API', 
      description: 'An API promoting Te Reo Māori using Whakataukī, Māori "proverbs".', 
      link: 'https://whakatauki-api.up.railway.app/',
      thumbnail: 'whakatauki.jpg',
      alt: ''
    },
    {
      name: 'My \'First\' Project', 
      description: 'A simple rock, paper, scissors project made as part of The Odin Project.', 
      link: 'https://achoo-o.github.io/paper-scissors-rock/paperScissorsRock.html',
      thumbnail: 'rockpaperscissors.jpg',
      alt: ''
      },
  ]

  const [selectedProject, setProject] = useState(projects[0])

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const target = e.target as HTMLTextAreaElement
    const i = Number(target.value)
    setProject(projects[i])
  }

  return (
    <main className="flex flex-col gap-5 w-full p-5 lg:grid lg:px-20 lg:pt-10 lg:max-h-screen">
      <div className="">
        <h1 className="mb-3 text-black text-5xl lg:text-3xl font-bold">
          {selectedProject.name}
        </h1>
        <p className="text-xl text-[#222927] lg:text-base">
          {selectedProject.description}
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-[70%_30%]">
        {/* display / image */}
        <div className="aspect-square h-144 lg:aspect-video border-2 overflow-hidden">
          <img className="object-cover" src={`.././images/${selectedProject.thumbnail}`} alt={selectedProject.alt}></img>
        </div>
        {/* list */}
        <section className="flex flex-col text-left gap-10 w-full max-h-144"> {/* overflow-y-scroll */}
          <div className="flex lg:flex-col gap-2 lg:gap-0 lg:pl-14 lg:pr-3">
            {projects.map((project, i) => {
              const {name} = project
              return (
                <button 
                key={name} 
                value={i} 
                onClick={(e) => handleClick(e)} 
                className="py-6 px-5 font-semibold text-gray-800 text-2xl tracking-wide border-y border-x border-[#bebebe] bg-gray-100 focus:bg-white focus:text-primary-100">
                  {name}
                </button>
              )
            })}
          </div>
        </section>
      </div>
      {/* title & description */}
    </main>
  )
}
