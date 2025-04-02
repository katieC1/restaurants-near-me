import { RestauranData } from "@/types";

export async function fetchRestaurants(
  postcode: String
): Promise<RestauranData[]> {
  try {
    //postcode cleaned before being passed here
    const url = `https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`;

    //for simple implimentation no cache is used - for production cache should be used
    const response = await fetch(url, { cache: "no-cache" });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch restaurants for "${postcode}": ${response.statusText}`
      );
    }

    const data = await response.json();

    // console.log(data.restaurants, "data in fetchRestaurants");

    return data.restaurants.map((restaurant: any) => ({
      name: restaurant.name,
      cuisines: restaurant.cuisines,
      ratingData: restaurant.rating,
      location: restaurant.address,
    }));
  } catch (error) {
    console.error("Error fetching restaurants data: ", error);
    return [];
  }
}
