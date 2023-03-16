import type { FC } from "react";
import { Container, TabItem } from "./styles";

type Props = {
  items: string[];
  onChange: (index: number) => void;
};

export const Tab: FC<Props> = ({ items, onChange }) => {
  return (
    <Container>
      {items.map<JSX.Element>((item, index) => (
        <TabItem key={index}>{item}</TabItem>
      ))}
    </Container>
  );
};
