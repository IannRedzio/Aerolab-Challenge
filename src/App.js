import { Stack } from "@chakra-ui/react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Stack
      maxW="1440px"
      w="100%"
      margin="auto"
      bg="#f9f9f9"
      marginY={4}
      spacing={0}
    >
      <Header />
      <ProductList />
    </Stack>
  );
}

export default App;
