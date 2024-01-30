import { Button as ButtonNB, IButtonProps, Text } from "native-base";

interface ButtonProps extends IButtonProps {
  title: string;
  variant?: "solid" | "outline";
}

export const Button = ({ title, variant = "solid", ...rest }: ButtonProps) => {
  return (
    <ButtonNB
      w={"full"}
      h={14}
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor={variant === "outline" ? "green.700" : "transparent"}
      _pressed={{
        bg: variant === "outline" ? "gray.500" : "green.500",
      }}
      mb={"10"}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "green.500" : "white"}
        fontFamily={"heading"}
        fontSize={"sm"}
      >
        {title}
      </Text>
    </ButtonNB>
  );
};
