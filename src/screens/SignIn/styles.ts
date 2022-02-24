import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;

  height: 70%;
  width: 100%;
`;

export const TitleWrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(30)}px;

  text-align: center;

  margin-top: 45px;
`;

export const SignInTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;

  text-align: center;

  margin-bottom: 67px;
  margin-top: 45px;
`;

export const Footer = styled.View`
  background: ${({ theme }) => theme.colors.secondary};

  height: 30%;
  width: 100%;
`;

export const FooterWrapper = styled.View`
  justify-content: space-between;

  margin-top: ${RFPercentage(-4)}px;
  padding: 0 32px;
`;
