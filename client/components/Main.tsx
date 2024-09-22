import Intro from './home/Intro'
import Tags from './home/Tags'

export default function Main() {
  return (
    <main className="flex flex-col gap-8 pt-20 text-center ">
          <Intro />
          <Tags />
    </main>
  )
}
