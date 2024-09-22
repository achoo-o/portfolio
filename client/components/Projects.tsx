import { useState } from "react"

export default function Main() {
  interface Props {
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    target: Properties
  }

  interface Properties {
    value: string
  }

  const projects = [
    {
      name: 'pawpals', 
      description: 'Made as part of the DevAcademy course in a group of 5. Pawpals is a website made to bring pet-lovers together.', 
      link: 'https://pawpals-matai-24.devacademy.nz/',
      thumbnail: 'pawpals.png'
    },
    {
      name: 'Whakataukī API', 
      description: 'An API promoting Te Reo Māori using Whakataukī, Māori "proverbs".', 
      link: 'https://whakatauki-api.up.railway.app/',
      thumbnail: 'whakatauki.png'
    },
    {
      name: 'My "First" Project', 
      description: 'A simple rock, paper, scissors project made as part of The Odin Project.', 
      link: 'https://achoo-o.github.io/paper-scissors-rock/paperScissorsRock.html',
      thumbnail: 'rockpaperscissors.png'
    },
  ]

  const [currProject, setProject] = useState(projects[0])

  function handleClick(e: Props) {
    const i = Number(e.target.value)
    setProject(projects[i])
  }

  return (
    <main className="flex flex-col gap-5">
      {/* display */}
      <section></section>
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
