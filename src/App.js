import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import Layout from "./UI/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Container>
            <Switch>
              <Route exact path="/">
                <Notes />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
            </Switch>
          </Container>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
