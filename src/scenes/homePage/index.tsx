import ContactSection from "./ContactSection";
import Hero from "./Hero";
import Offers from "./Offers";
import Platinum from "./Platinum";

const HomePage = () => {
  return (
    <section>
      <Hero />
      <Offers />
      <Platinum />
      <ContactSection />
    </section>
  );
};

export default HomePage;
