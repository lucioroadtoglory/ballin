import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const TabItem = styled.button`
  padding: 8px;
  border: 0.5px solid ${({ theme }) => theme.colors.terminalWhite};
  text-align: center;
  align-self: flex-start;
  color: red;

  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
`;
