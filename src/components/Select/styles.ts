import styled from "styled-components";
import ChevronDownOutline from "@icons/chevron-down-outline.svg";

export const Container = styled.div`
  border: 1px solid white;
  border-radius: 4px;
`;

export const RequestModeButton = styled.button`
  display: flex;
  padding: 8px;
  align-items: center;
  border: 0px solid white;
  border-right-width: 1px;
  margin-right: 8px;
`;

export const RequestMode = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-right: 8px;
`;

export const MoreOptionsIcon = styled(ChevronDownOutline)`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Item = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  padding: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  border: 4px;
  :hover {
    background-color: ${({ theme }) => theme.colors.terminalWhite};
    color: ${({ theme }) => theme.colors.editor};
  }
`;
