import { useState, type FC, type ReactNode } from "react";
import {
  Container,
  Item,
  MoreOptionsIcon,
  RequestMode,
  RequestModeButton,
} from "./styles";

export type Option<T extends string | number = string> = {
  label: string;
  value: T;
};

export type SelectProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> & {
  options: Option[];
  value: ReactNode;
  onChange: (value: Option["value"]) => void;
};

export const Select: FC<SelectProps> = ({
  value,
  options,
  onChange,
  ...rest
}) => {
  const [visibleSelect, setVisibleSelect] = useState<boolean>(false);

  const handleToggleSelectMethod = (): void =>
    setVisibleSelect((prev) => !prev);

  const handleSelectValue = (_value: Option["value"]) => {
    onChange(_value);
    handleToggleSelectMethod();
  };

  return (
    <>
      <RequestModeButton onClick={handleToggleSelectMethod}>
        <RequestMode>{value}</RequestMode>
        <MoreOptionsIcon />
      </RequestModeButton>
      <Container
        style={{ display: visibleSelect ? "block" : "none" }}
        {...rest}
      >
        {options.map<JSX.Element>((item, index) => (
          <Item key={index} onClick={() => handleSelectValue(item.value)}>
            {item.label}
          </Item>
        ))}
      </Container>
    </>
  );
};
