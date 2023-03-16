import type { FC } from "react";
import { Navbar, Editor, UrlBar } from "@components/index";
import { Body, BodyWrapper, Container, UrlWrapper } from "./styles";
import { Result } from "@components/Result";

export const Draft: FC = () => {
  return (
    <Container>
      {/* <Navbar /> */}
      <Body>
        <UrlWrapper>
          <UrlBar />
        </UrlWrapper>
        <BodyWrapper>
          <Editor />
          <Result />
        </BodyWrapper>
      </Body>
    </Container>
  );
};
