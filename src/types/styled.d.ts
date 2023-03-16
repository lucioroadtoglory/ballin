import type { darkTheme, lightTheme } from "../global/theme";

declare module "styled-components" {
  import type { DefaultTheme } from "styled-components";

  type Theme = typeof lightTheme & typeof darkTheme;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
