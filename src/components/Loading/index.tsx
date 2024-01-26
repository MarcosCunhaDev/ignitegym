import { ActivityIndicator } from "react-native";
import * as S from "./styles";

export const Loading = () => {
  return (
    <S.Container>
      <ActivityIndicator />
    </S.Container>
  );
};
