import { useState } from "react"

export default function Main() {

  const projects = [
    {
      name: 'pawpals', 
      description: 'Made as part of the DevAcademy course in a group of 5. Pawpals is a website made to bring pet-lovers together.', 
      link: 'https://pawpals-matai-24.devacademy.nz/',
      thumbnail: 'pawpals.png',
      alt: ''
    },
    {
      name: 'Whakataukī API', 
      description: 'An API promoting Te Reo Māori using Whakataukī, Māori "proverbs".', 
      link: 'https://whakatauki-api.up.railway.app/',
      thumbnail: 'whakatauki.png',
      alt: ''
    },
    {
      name: 'My "First" Project', 
      description: 'A simple rock, paper, scissors project made as part of The Odin Project.', 
      link: 'https://achoo-o.github.io/paper-scissors-rock/paperScissorsRock.html',
      thumbnail: 'rockpaperscissors.png',
      alt: ''
    },
  ]

  const [currProject, setProject] = useState(projects[0])

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const target = e.target as HTMLTextAreaElement
    const i = Number(target.value)
    setProject(projects[i])
  }

  return (
    <main className="flex flex-col gap-5">
      {currProject.name}
      {/* display */}
      <section>
        <img src={currProject.thumbnail}></img>
      </section>
      {/* project list / scroll */}
      <section>
        {projects.map((project, i) => {
          const {name} = project
          return (
            <button key={name} value={i} onClick={(e) => handleClick(e)}>
              {name}
            </button>
          )
        })}
      </section>
    </main>
  )
}
