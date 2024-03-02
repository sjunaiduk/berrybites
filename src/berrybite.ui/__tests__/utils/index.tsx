import { ChakraBaseProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
}
export const ChakraUiWrapper = ({ children }: Props) => (
  <ChakraBaseProvider>{children}</ChakraBaseProvider>
);

const queryClient = new QueryClient();

export const QueryClientWrapper =
  () =>
  ({ children }: Props) =>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
