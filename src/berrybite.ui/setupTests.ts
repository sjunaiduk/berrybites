import "@testing-library/jest-dom";
import nock from "nock";
import { HardcodedRestaurants } from "./src/utils/data";

nock(import.meta.env.VITE_JET_RESTAURANTS_API)
  .defaultReplyHeaders({
    "access-control-allow-origin": "*",
  })
  .get(/.*/)
  .reply(200, {
    restaurants: HardcodedRestaurants,
  });
