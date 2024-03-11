import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="font-serif bg-gray-100">
      <Navbar />
      <Hero />
      <About />
  </div>
    
  )
}

export default App