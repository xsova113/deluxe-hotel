import Map from "@/components/Map";
import Gallery from "../../components/Gallery";
import Hero from "../../components/Hero";

const VancouverPage = () => {
  return (
    <>
      <Hero image={"/assets/vancouver1.png"} title={"Deluxe Vancouver"} />
      <Gallery
        welcomeTitle={"Welcome to the Epitome of Luxury"}
        title={"The Deluxe Vancouver Hotel"}
        description={
          "Indulge in an experience beyond compare at the Deluxe Vancouver Hotel, where opulence knows no bounds and every moment is a masterpiece of luxury. Nestled in the heart of Vancouver, our exquisite hotel redefines sophistication, offering an unrivaled sanctuary for the discerning traveler."
        }
        image1={"/assets/vancouver1.png"}
        image2={"/assets/vancouver2.png"}
        image3={"/assets/vancouver3.png"}
        image4={"/assets/vancouver4.png"}
        image5={"/assets/vancouver5.png"}
        image6={"/assets/vancouver6.png"}
      />
      <Map lat={49.246292} lng={-123.116226} />
    </>
  );
};

export default VancouverPage;
