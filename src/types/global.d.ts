interface Cuisine {
  name: string;
  uniqueName: string;
}

interface Rating {
  starRating: number;
}

interface Address {
  city: string;
  firstLine: string;
  postalCode: string;
}

interface Restaurant {
  id: string;
  name: string;
  cusuines: Cuisine[];
  rating: Rating;
  address: Address;
}
