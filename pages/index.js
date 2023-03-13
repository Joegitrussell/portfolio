import HomePage from '../components/HomePage.jsx'
import Portfolio from '@/components/Portfolio.jsx'
import Experience from '@/components/Experience.jsx'
import Me from '@/components/Me.jsx'
import Contact from '@/components/Contact.jsx'

export default function Home() {
  return (
    <div>
      <HomePage/>
      <Portfolio/>
      <Experience/>
      <Me/>
      {/* <Contact/> */}
    </div>
  )
}
