import { RestauranData } from "@/types";

export async function fetchRestaurants(
  postcode: String
): Promise<RestauranData[]> {
  // Example implementation: Replace with actual API call logic

  const url = `https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode.replace(
    " ",
    ""
  )}`;

  const response = await fetch(url, { cache: "no-cache" });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch restaurants for "${postcode}": ${response.statusText}`
    );
  }

  const data = await response.json();

  console.log(data.restaurants, "data in fetchRestaurants");

  return data.restaurants.map((restaurant: any) => ({
    ...restaurant,
  }));
}
