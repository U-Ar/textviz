import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as Colors from "@mui/material/colors";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import PostTextContent from "./PostTextContent";
import Sidebar from "./Sidebar";

const theme = createTheme({
  palette: {
    primary: Colors.lightBlue,
    secondary: Colors.lightGreen,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header/>
        <div className="App-body">
          <div className="content-wrapper">
            {/*<Router>
              <Routes>
                <Route path="/">
                  {/*<PostTextContent /> 
                  hello, world
                </Route>
                <Route path="/item">
                  <ItemContent /> 
                  hello, world2
                </Route>
              </Routes>
            </Router>*/}
            <PostTextContent/>
          </div>
          <div className="sidebar-wrapper">
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
