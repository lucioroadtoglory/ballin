import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.editor};
`;

export const TextInput = styled.textarea`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.editor};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-family: monospace;
  resize: none;
  border: none;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.terminalWhite};
  font-size: 16px;
`;

export const LineCounterWrapper = styled.div`
  padding: 0 8px;
  overflow: auto;
`;

export const LineCount = styled.p`
  color: #fff;
  line-height: 24px;
`;
