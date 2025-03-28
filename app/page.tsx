import RestaurantCard from "@/components/RestaurantCard/restaurant-card";
import SectionContainer from "@/components/section-container/section-container";
import Image from "next/image";





export default function Home() {


  const restaurant = {
    name: "Yala Yala",
    location: "London",
    rating: 4.5,
  }
  return (
    <>
      <SectionContainer
        titleText="Takeway near you"
      >
        <p className="text-center pt-4 text-organge">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nisi dolorum repellendus commodi numquam molestiae doloremque consequatur at, ipsum, earum eos voluptatum quae molestias vero reprehenderit corrupti voluptas praesentium harum.</p>
      </SectionContainer>



      <SectionContainer>
        <RestaurantCard restaurant={restaurant} />
      </SectionContainer>
    </>

  );
}
