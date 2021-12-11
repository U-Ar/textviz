import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import PostTextContent from "./PostTextContent";
import GetTextContent from "./GetTextContent";
import Sidebar from "./Sidebar";

import { Container, Grid, Stack } from "@mui/material";



const theme = createTheme({
  shadows: ["none"],
  palette: {
    primary: {
      light: '#4fb3bf',
      main: '#00838f',
      dark: '#005662',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff263',
      main: '#fbc02d',
      dark: '#c49000',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header/>
        <Container fixed style={{marginTop:"10px"}}>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <Stack spacing={1}>
                <PostTextContent/>
                <GetTextContent/>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Sidebar/>
            </Grid>
          </Grid>
          <Footer/>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
