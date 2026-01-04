import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NewArrivals from './components/NewArrivals'
import BestSellers from './components/BestSellers'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="flex flex-col gap-24 py-12 px-6 max-w-[100%] mx-auto w-full z-10 bg-background-dark">
        <NewArrivals />
        <BestSellers />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

export default App
