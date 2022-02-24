import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Button = styled(RectButton)`
  background: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  align-items: center;
  flex-direction: row;

  margin-bottom: 16px;

  height: ${RFValue(56)}px;
`;

export const ImageContainer = styled.View`
  border-color: ${({ theme }) => theme.colors.bg_light};
  border-right-width: 1px;

  align-items: center;
  justify-content: center;

  padding: ${RFValue(16)}px;

  height: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;

  flex: 1;
  text-align: center;
`;
