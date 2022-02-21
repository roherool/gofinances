import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { BorderlessButton } from "react-native-gesture-handler";

import { DataListProps } from ".";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.bg_light};
  flex: 1;
`;

export const Header = styled.View`
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  height: ${RFPercentage(42)}px;
  justify-content: center;
  width: 100%;
`;

export const UserWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  padding: 0 24px;

  width: 100%;
`;

export const UserInfo = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Photo = styled.Image`
  border-radius: 10px;
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`;

export const LogoutButton = styled(BorderlessButton)``;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  margin-top: ${RFPercentage(20)}px;
  position: absolute;

  width: 100%;
`;

export const Transactions = styled.View`
  flex: 1%;

  margin-top: ${RFPercentage(12)}px;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  margin-bottom: 16px;
`;

export const TransactionList = styled(
  FlatList as new (
    props: FlatListProps<DataListProps>
  ) => FlatList<DataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;

export const LoadContainer = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;
