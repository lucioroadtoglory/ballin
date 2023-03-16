const fonts = {
  regular: "OpenSansRegular",
  bold: "OpenSansBold",
  regularItalic: "OpenSansRegularItalic",
};

export const lightTheme = {
  fonts,
  colors: {
    text: "#565a6e",
    terminalWhite: "#343b58",
    terminalBlack: "#959cbd",
    editor: "#d5d6db",
  },
};

export const darkTheme: typeof lightTheme = {
  fonts,
  colors: {
    text: "#9aa5ce",
    terminalWhite: "#c0caf5",
    terminalBlack: "#0f0f14",
    editor: "#1a1b26",
  },
};
