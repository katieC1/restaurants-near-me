import RestaurantCardStack from "@/components/restaurant-card-stack/restaurant-card-stack";
import RestaurantCard from "@/components/RestaurantCard/restaurant-card";
import SectionContainer from "@/components/section-container/section-container";
import Image from "next/image";
import { fetchRestaurants } from "./lib/fetchrestaurants";

interface PageProps {
  searchParams?: { postcode?: string };  // Next.js passes query params here
}


export default async function Home({ searchParams }: PageProps) {

  // const postcode = searchParams?.postcode || 'W36JH';
  const postcode = 'W36JH';
  const allRestaurants = await fetchRestaurants(postcode);
  const restaruants = allRestaurants.slice(0, 10);

  console.log(restaruants, 'restaruants');

  return (
    <>
      <SectionContainer
        titleText="Takeway near you"
      >
        <p className="text-center pt-4 text-organge">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nisi dolorum repellendus commodi numquam molestiae doloremque consequatur at, ipsum, earum eos voluptatum quae molestias vero reprehenderit corrupti voluptas praesentium harum.</p>
      </SectionContainer>



      <SectionContainer>
        <h2>Restaurants to go back here</h2>
        {/* <RestaurantCardStack restaurantData={restaurants} /> */}
      </SectionContainer>
    </>

  );
}
