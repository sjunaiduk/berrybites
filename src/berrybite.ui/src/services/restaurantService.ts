import axios from "axios";
import { HardcodedRestaurants } from "../utils/data";

const client = axios.create({
  baseURL: import.meta.env.VITE_JET_RESTAURANTS_API,
});

class RestaurantService {
  async GetAll(postcode: string): Promise<Restaurant[]> {
    console.log("Environment is ", import.meta.env.MODE);

    if (import.meta.env.MODE == "Production") {
      return HardcodedRestaurants;
    }
    var res = await client.get<GetRestaurantsResponse>(`/${postcode}`);
    return res.data.restaurants;
  }
}

export default new RestaurantService();
