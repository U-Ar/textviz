import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import * as Colors from "@material-ui/core/colors";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";

const theme = createTheme({
  palette: {
    primary: Colors.lightBlue,
    secondary: Colors.lightGreen,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Header/>
        <div className="App-body">
          <div className="content-wrapper">
            <Router>
              <Routes>
                <Route path="/">
                  {/*<PostTextContent /> */}
                  hello, world
                </Route>
                <Route path="/item">
                  {/*<ItemContent /> */}
                  hello, world2
                </Route>
              </Routes>
            </Router>
          </div>
          <div className="sidebar-wrapper"></div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
