export interface RestauranData {
  name: string;
  cuisines: [];
  ratingData: Rating;
  location: Location;
}

export interface Rating {
  starRating: number;
  count: number;
}

export interface Cuisine {
  name: string;
  uniqueName: string;
}

export interface Location {
  city: string;
  postalCode: string;
  firstLine: string;
  location: any;
}

export interface StarRatingProps {
  rating: number;
  starDimension?: string;
  starSpacing?: string;
}
