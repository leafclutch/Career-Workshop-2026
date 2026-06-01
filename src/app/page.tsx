import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import Outcomes from '@/components/landing/Outcomes'
import Agenda from '@/components/landing/Agenda'
import Speaker from '@/components/landing/Speaker'
import Testimonials from '@/components/landing/Testimonials'
import RegistrationSection from '@/components/landing/RegistrationSection'
import Footer from '@/components/landing/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="cw-divider" />
        <Outcomes />
        <hr className="cw-divider" />
        <Agenda />
        <hr className="cw-divider" />
        <Speaker />
        <hr className="cw-divider" />
        <Testimonials />
        <hr className="cw-divider" />
        <RegistrationSection />
      </main>
      <Footer />
    </>
  )
}
