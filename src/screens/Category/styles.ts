import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  background: ${({ theme }) => theme.colors.bg_light};
  flex: 1;
`;

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;

  padding-bottom: 19px;

  height: ${RFValue(113)}px;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const CategoryInfo = styled.TouchableOpacity<CategoryProps>`
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary_light : theme.colors.bg_light};

  align-items: center;
  flex-direction: row;

  padding: ${RFValue(15)}px;

  width: 100%;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;

  margin-right: 16px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Divider = styled.View`
  background: ${({ theme }) => theme.colors.text};
  height: 1px;
  width: 100%;
`;

export const Content = styled.View`
  padding: 24px;

  width: 100%;
`;
