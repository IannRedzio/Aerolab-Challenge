import React from "react";
import { Stack } from "@chakra-ui/react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <Stack bg="#f9f9f9">
      <Header />
      <ProductList />
    </Stack>
  );
};

export default Home;
