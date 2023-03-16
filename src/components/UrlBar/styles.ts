import styled from "styled-components";
import ArrowForwardOutline from "@icons/arrow-forward-outline.svg";
import { Select } from "@components/Select";

export const Container = styled.div`
  border: 1px solid white;
  width: 50%;
  border-radius: 4px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Divisor = styled.div`
  width: 1px;
  height: 16px;
  margin-right 8px;
  background-color: ${({ theme }) => theme.colors.terminalWhite};
`;

export const UrlInput = styled.input.attrs({
  inputMode: "text",
} as React.HTMLAttributes<HTMLInputElement>)`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  background-color: transparent;
  border: none;
`;

export const SendButton = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};

  border: 0 solid white;
  border-left-width: 1px;
`;

export const ArrowRight = styled(ArrowForwardOutline)`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;

export const SelectMethod = styled(Select)`
  position: absolute;
  margin-top: 8px;
`;
