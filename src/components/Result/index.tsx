import { Tab } from "@components/Tab";
import type { FC } from "react";
import { Container } from "./styles";

export const Result: FC = () => {
  const onChange = () => {
    /**/
  };

  return (
    <Container>
      <Tab
        items={["Preview", "Headers", "Cookies", "Timeline"]}
        onChange={onChange}
      />
    </Container>
  );
};
