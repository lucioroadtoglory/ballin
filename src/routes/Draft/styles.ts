import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  flex-direction: column;
  display: flex;
`;

export const Body = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background: red;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.editor};
`;

export const UrlWrapper = styled.div`
  padding: 8px 0;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: ${({ theme }) => theme.colors.terminalBlack};
`;
