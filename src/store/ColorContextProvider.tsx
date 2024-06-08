import React, { ReactNode } from "react";
import { ColorModeContext } from "./ColorContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { amber, grey } from "@mui/material/colors";

interface propsTypes {
  children: ReactNode;
}

const ColorContextProvider: React.FC<propsTypes> = ({ children }) => {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light" && {
            // palette values for light mode
            primary: amber,
            divider: amber[200],

            text: {
              primary: grey[900],
              secondary: grey[800],
            },
            border: grey[400],
          }),
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorContextProvider;
