import axios from "axios";

const client = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/${
    import.meta.env.VITE_JET_RESTAURANTS_API
  }`,
});

export class RestaurantService {
  async GetAll(postcode: string): Promise<Restaurant[]> {
    var res = await client.get<GetRestaurantsResponse>(`/${postcode}`);

    return res.data.restaurants;
  }
}
