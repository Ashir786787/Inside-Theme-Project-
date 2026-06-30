import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Clients from "./components/Clients/Clients";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Cases from "./components/Cases/Cases";
import Features from "./components/Features/Features";
import Stats from "./components/Stats/Stats";
import Team from "./components/Team/Team";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Banner />
      <Cases />
      <Features />
      <Stats />
      <Team />
      <Testimonials />
    </>
  );
}

export default App;