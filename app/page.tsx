import { About, Divider, Intro } from './components'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
    </main>
  )
}
