import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Category, Icon } from "./styles";

interface CategoryProps extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export function CategorySelect({ title, onPress, testID }: CategoryProps) {
  return (
    <Container onPress={onPress} testID={testID}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
