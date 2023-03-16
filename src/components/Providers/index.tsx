import type { FC, ReactNode } from "react";
import { darkTheme, lightTheme } from "../../global/theme";
import { ThemeProvider } from "styled-components";

type Props = { children: ReactNode };

export const Providers: FC<Props> = ({ children }) => {
  const isDarkTheme = true;
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
