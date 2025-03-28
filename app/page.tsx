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
        <div>
          <p className="text-center">This will be the cards</p>
        </div>
      </SectionContainer>



      <SectionContainer>
        <RestaurantCard restaurant={restaurant} />
      </SectionContainer>
    </>

  );
}
