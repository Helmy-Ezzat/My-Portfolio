import {
  About,
  ContactMe,
  Courses,
  Divider,
  Intro,
  Projects,
  Skills,
  ThemeSwitch,
  WhatsApp,
} from '@/components'


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Courses />
      <ContactMe />
      <WhatsApp />
      <ThemeSwitch />
    </main>
  )
}
