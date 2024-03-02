import { ChakraBaseProvider } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}
export const ChakraUiWrapper = ({ children }: Props) => (
  <ChakraBaseProvider>{children}</ChakraBaseProvider>
);
