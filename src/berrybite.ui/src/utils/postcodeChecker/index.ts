import { isValid } from "postcode";

export const IsPostcodeValid = (postcode: string): boolean => {
  return isValid(postcode);
};
