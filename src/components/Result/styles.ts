import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow-y: scroll;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.editor};
  flex: 1;
  height: 100%;
`;

export const TextInput = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.editor};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-family: monospace;
  resize: none;
  font-size: 14px;
  line-height: 24px;
`;

export const LineCounterWrapper = styled.div`
  padding: 0 8px;
`;

export const LineCount = styled.p`
  color: #fff;
  line-height: 24px;
`;
