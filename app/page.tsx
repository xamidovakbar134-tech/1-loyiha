import Banner from "./_components/Banner";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import PreFooter from "./_components/PreFooter";
import Section from "./_components/Section";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <Section/>
      <PreFooter/>
      <Banner/>
      <Footer/>
    </div>
  );
}
