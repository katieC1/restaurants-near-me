import RestaurantCardStack from "@/components/restaurant-card-stack/restaurant-card-stack";
import RestaurantCard from "@/components/RestaurantCard/restaurant-card";
import SectionContainer from "@/components/section-container/section-container";
import Image from "next/image";
import { fetchRestaurants } from "./lib/fetchrestaurants";
import { SearchBar } from "@/components/search-bar/search-bar";

interface PageProps {
  searchParams?: { postcode?: string };
}


export default async function Home({ searchParams }: PageProps) {


  const postcode = await searchParams?.postcode || 'w36jh';

  const allRestaurants = await fetchRestaurants(postcode);
  const restaurants = allRestaurants.slice(0, 10);

  // console.log(restaurants, 'restaruants');

  return (
    <>
      <SectionContainer
        titleText="Takeway near you"
      >
        <p className="text-center pt-4 text-organge">Enter your postcode to search for restaurants in your local area.</p>

        <SearchBar defaultValue={postcode} />

      </SectionContainer>



      <SectionContainer>
        <RestaurantCardStack restaurantData={restaurants} postcode={postcode} />
      </SectionContainer>
    </>

  );
}
