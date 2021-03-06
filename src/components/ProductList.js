import React, { useState, useEffect } from "react";
import { Stack, Text, Button, Divider, SimpleGrid } from "@chakra-ui/react";
import { api } from "../api";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.getProducts().then((product) => setProducts(product));
    console.log(products);
  }, [products]);

  return (
    <Stack padding={8} textAlign="center">
      <Stack isInline>
        <Text alignSelf="center"> 16 of 32 products</Text>
        <Stack isInline>
          <Text alignSelf="center">Sort By:</Text>
          <Button colorScheme="cyan">Most Recent</Button>
          <Button colorScheme="cyan">Lower Price</Button>
          <Button colorScheme="cyan">Highest Price</Button>
        </Stack>
      </Stack>
      <Divider />
      <Stack>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, xl: 4 }} gap={3}>
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default ProductList;
