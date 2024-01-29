import { Spinner, Center } from "native-base";
import * as S from "./styles";

export const Loading = () => {
  return (
    <Center flex={1} bg="gray.700">
      <Spinner color={"green.500"} />
    </Center>
  );
};
