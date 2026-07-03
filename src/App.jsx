import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import WhyJoin from "./components/WhyJoinTemp/WhyJoin";
import Community from "./components/Community/Community";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <>
      <Navbar />
      <Hero />
       <About /> 
      <WhyJoin />
      <Community/>
      <Join/>
      <Footer/>
    </>
  );
}

export default App;