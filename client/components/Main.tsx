import Intro from './main/Intro'
import Tags from './main/Tags'

export default function Main() {
  return (
    <main className="flex flex-col gap-8 p-10 pt-10 text-center tracking-wide lg:flex-row lg:gap-x-20 lg:p-40 lg:text-left lg:items-start">
          <Intro />
          <Tags />
    </main>
  )
}
