import { Spinner, Center } from "native-base";
import * as S from "./styles";

export const Loading = () => {
  return (
    <Center flex={1} bg="pink.200">
      <Spinner />
    </Center>
  );
};
