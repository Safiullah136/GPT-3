import Blog from "../components/Blog/Blog";
import Cta from "../components/CTA/Cta";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Logo from "../components/Logos/Logo";
import NavBar from "../components/NavBar/NavBar";
import Possibility from "../components/Possibility/Possibility";
import WhatIsGPT3 from "../components/What Is GPT-3/gpt3";

function HomePage() {
  return (
    <div>
      <div className="gradient-bg">
        <NavBar />
        <Header />
      </div>
      <Logo />
      <WhatIsGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default HomePage;
