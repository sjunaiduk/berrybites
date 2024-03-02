import { useQuery } from "@tanstack/react-query";
import restaurantService from "../services/restaurantService";

export const useRestaurants = (postcode: string) =>
  useQuery({
    queryKey: ["restaurants", postcode],
    queryFn: () => restaurantService.GetAll(postcode),
  });
