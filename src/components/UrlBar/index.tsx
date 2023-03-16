import type { FC } from "react";
import { useRequestStore, type RequestMethod } from "@store/request";
import type { Option } from "../Select";
// import type { DefaultTheme } from "styled-components";
import {
  Container,
  // Divisor,
  UrlInput,
  SelectMethod,
  ArrowRight,
  SendButton,
} from "./styles";

const requestMethodsOptions: Option[] = [
  "GET",
  "POST",
  "PATCH",
  "PUT",
  "DELETE",
  "OPTIONS",
  "HEAD",
].map((item) => ({ label: item, value: item }));

export const UrlBar: FC = () => {
  const [requestMethod, setMethod] = useRequestStore((state) => [
    state.requestMethod,
    state.setRequestMethod,
  ]);

  const onChange = (value: RequestMethod | string): void => {
    setMethod(value as RequestMethod);
  };

  return (
    <Container>
      <div>
        <SelectMethod
          value={requestMethod.toUpperCase()}
          options={requestMethodsOptions}
          onChange={onChange}
        />
      </div>
      <UrlInput />
      <SendButton>
        Send
        <ArrowRight />
      </SendButton>
    </Container>
  );
};
