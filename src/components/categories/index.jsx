import React from "react";
import { Container } from "./style";
import { categories } from "../../data";
import CategoriesItem from "../categoriesItem";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoriesItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
