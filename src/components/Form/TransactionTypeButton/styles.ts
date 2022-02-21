import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface IconProps {
  type: "up" | "down";
}

interface ButtonProps {
  isActive: boolean;
  type: "up" | "down";
}

export const Container = styled.View<ButtonProps>`
  ${({ isActive, type }) =>
    isActive &&
    type === "up" &&
    css`
      background: ${({ theme }) => theme.colors.success_light};
    `};

  ${({ isActive, type }) =>
    isActive &&
    type === "down" &&
    css`
      background: ${({ theme }) => theme.colors.attention_light};
    `};

  border-width: ${({ isActive }) => (isActive ? 0 : 1.5)}px;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;

  width: 48%;
`;

export const Button = styled(RectButton)`
  align-items: center;
  flex-direction: row;
  justify-content: center;

  padding: 16px;
`;

export const Icon = styled(Feather)<IconProps>`
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
  font-size: ${RFValue(24)}px;

  margin-right: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
