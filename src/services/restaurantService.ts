import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

export class RestaurantService {
  async GetAll(postcode: string): Promise<Restaurant[]> {
    var res = await client.get<GetRestaurantsResponse>(`/${postcode}`);
    return res.data.restaurants;
  }
}
