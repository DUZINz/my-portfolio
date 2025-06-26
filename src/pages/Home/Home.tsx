import Hero from "./Sections/Hero/Hero"
import About from "./Sections/About/About"
import Projects from "./Sections/Projects/Projects"
import Experience from "./Sections/Experience/Experience"
import Contact from "./Sections/Contact/Contact"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Home
