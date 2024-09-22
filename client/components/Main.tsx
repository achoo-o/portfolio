import Intro from './home/Intro'
import CTA from './home/CTA'
import Tags from './home/Tags'

export default function Main() {
  return (
    <main className="">
      <div className="">
        <div className="">
          <Intro />
          <CTA />
        </div>
        <div>
          <Tags />
        </div>
      </div>
    </main>
  )
}
