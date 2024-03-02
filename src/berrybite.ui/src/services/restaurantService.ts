import axios from "axios";
import { HardcodedRestaurants } from "../utils/data";

const client = axios.create({
  baseURL: import.meta.env.VITE_JET_RESTAURANTS_API,
});

class RestaurantService {
  async GetAll(postcode: string): Promise<Restaurant[]> {
    if (import.meta.env.MODE == "production") {
      console.log(
        "Environment is production, returning hardcoded restaurants."
      );
      return new Promise((resolve) => {
        setTimeout(() => resolve(HardcodedRestaurants), 1000);
      });
    }
    var res = await client.get<GetRestaurantsResponse>(`/${postcode}`);
    return res.data.restaurants;
  }
}

export default new RestaurantService();
