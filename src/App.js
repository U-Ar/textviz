import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import * as Colors from "@material-ui/core/colors";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
        <header className="App-header">a</header>
        <div className="App-body">
          <div className="content-wrapper">
            <Router>
              <Routes>
                <Route path="/">
                  {/*<InitialContent /> */}
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
