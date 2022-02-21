import React from "react";
import { FlatList } from "react-native";

import { Button } from "../../components/Form/Button";
import { categories } from "../../mocks/categories";

import {
  Container,
  Header,
  Title,
  CategoryInfo,
  Icon,
  Name,
  Divider,
  Content,
} from "./styles";

interface CategoryType {
  key: string;
  name: string;
}

interface CategoryProps {
  category: CategoryType;
  setCategory: (category: CategoryType) => void;
  closeSelectCategory: () => void;
}

export function Category({
  category,
  setCategory,
  closeSelectCategory,
}: CategoryProps) {
  function handleCategorySelect(category: CategoryType) {
    setCategory(category);
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.key}
        style={{ flex: 1, width: "100%" }}
        renderItem={({ item }) => (
          <CategoryInfo
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </CategoryInfo>
        )}
        ItemSeparatorComponent={() => <Divider />}
      />

      <Content>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Content>
    </Container>
  );
}
