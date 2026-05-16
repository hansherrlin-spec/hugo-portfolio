import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CV from "@/components/CV";
import Media from "@/components/Media";
import CastingProfile from "@/components/CastingProfile";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <CV />
        <Media />
        <CastingProfile />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
