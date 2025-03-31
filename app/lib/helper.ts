async function getCoordinates(
  postcode: string
): Promise<{ lat: number; lng: number }> {
  const response = await fetch(
    `https://api.postcodes.io/postcodes/${postcode}`
  );
  const data = await response.json();

  if (data.status === 200) {
    return {
      lat: data.result.latitude,
      lng: data.result.longitude,
    };
  } else {
    throw new Error(`Failed to fetch coordinates for postcode: ${postcode}`);
  }
}

export function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

  const R = 3958.8; // Radius of the Earth in miles
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in miles
}

export async function getDistanceBetweenPostcodes(
  postcode1: string,
  postcode2: string
): Promise<number> {
  const coords1 = await getCoordinates(postcode1);
  const coords2 = await getCoordinates(postcode2);

  return calculateDistance(coords1.lat, coords1.lng, coords2.lat, coords2.lng);
}
