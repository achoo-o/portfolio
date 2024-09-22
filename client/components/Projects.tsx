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
      name: 'My "First" Project', 
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
    <main className="flex flex-col gap-5 w-full p-5 lg:p-20">
      <div className="lg:flex -mb-3">
        {/* display / image */}
        <div className="aspect-square lg:aspect-video border-2 overflow-hidden">
          <img className="object-cover" src={`.././images/${selectedProject.thumbnail}`} alt={selectedProject.alt}></img>
        </div>
        {/* list */}
        <section className="flex flex-col text-left gap-10 w-4/5">
          <div className="flex lg:flex-col gap-2 lg:gap-0 lg:px-10">
            {projects.map((project, i) => {
              const {name} = project
              return (
                <button key={name} value={i} onClick={(e) => handleClick(e)} className="border-2 text-2xl py-3 px-5 bg-gray-100 focus:bg-white">
                  {name}
                </button>
              )
            })}
          </div>
        </section>
      </div>
      {/* title & description */}
        <div className="">
          <h1 className="mb-3 text-gray-900 text-5xl lg:text-2xl font-semibold">
            {selectedProject.name}
          </h1>
          <p className="text-xl lg:text-base">
            {selectedProject.description}
          </p>
        </div>
    </main>
  )
}
