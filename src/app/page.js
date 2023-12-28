import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyProject from "@/components/MyProject";
import Nav from "@/components/Nav";
import Skills from "@/components/Skills";
import Test from "@/components/Test";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mainContainer">
      <Nav />
      <div className="pageContainer m-auto  pt-[4.5rem] ">
        <Hero />
        <About />
        <Skills />
        <MyProject />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
