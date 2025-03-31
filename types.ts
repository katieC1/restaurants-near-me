export interface RestauranData {
  name: string;
  cuisines: [];
  ratingData: Rating;
  location: {
    city: string;
    postcode: string;
    firstLine: string;
    location: Cuisine;
  };
}

export interface Rating {
  starRating: number;
  count: number;
}

export interface Cuisine {
  name: string;
  uniqueName: string;
}
