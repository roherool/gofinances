import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
  background: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  margin-bottom: 8px;
  padding: 16px 18px;

  width: 100%;
`;
