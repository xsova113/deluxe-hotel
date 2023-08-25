import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Map from "@/components/Map";

const VictoriaPage = () => {
  return (
    <>
      <Hero image={"/assets/victoria1.png"} title={"Deluxe Victoria"} />
      <Gallery
        welcomeTitle={"Welcome to the Epitome of Luxury"}
        title={"The Deluxe Victoria Hotel"}
        description={
          "Indulge in an experience beyond compare at the Deluxe Victoria Hotel, where opulence knows no bounds and every moment is a masterpiece of luxury. Nestled in the heart of Victoria, our exquisite hotel redefines sophistication, offering an unrivaled sanctuary for the discerning traveler."
        }
        image1={"/assets/victoria1.png"}
        image2={"/assets/vancouver2.png"}
        image3={"/assets/vancouver3.png"}
        image4={"/assets/vancouver4.png"}
        image5={"/assets/vancouver5.png"}
        image6={"/assets/vancouver6.png"}
      />
      <Map lat={48.407326} lng={-123.329773}/>
    </>
  );
};

export default VictoriaPage;
