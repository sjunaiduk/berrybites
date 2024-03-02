import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_JET_RESTAURANTS_API,
});

class RestaurantService {
  async GetAll(postcode: string): Promise<Restaurant[]> {
    var res = await client.get<GetRestaurantsResponse>(`/${postcode}`);
    return res.data.restaurants;
  }
}

export default new RestaurantService();
