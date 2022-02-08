import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Profile from "./containers/Profile";
import DataForm from "./components/DataForm";
import Container from "@mui/material/Container";

import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const [themeMode, setThemeMode] = React.useState("true");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode ? "dark" : "light",
        },
      }),
    [themeMode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar theme={themeMode} setTheme={setThemeMode} />

        <Container maxWidth="sm">
          <Profile />
          <DataForm />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
