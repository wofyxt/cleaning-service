import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import CallForm from './components/CallForm'
import Footer from './components/Footer'
import SuccessModal from './components/SuccessModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <CallForm onSubmit={openModal} />
      </main>
      <Footer />
      <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default App