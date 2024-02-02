import React, { Suspense, useContext, useEffect } from "react";
import { ThemeProvider, adaptV4Theme } from "@mui/material/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import AuthContext from "src/context/Auth";
import UserContext from "src/context/User";
import SettingsContext from "src/context/SettingsContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

import AppRouter from "./AppRouter"; // Import the AppRouter component
// import { createTheme } from "src/theme";

const history = createBrowserHistory();

function App() {
  const themeSeeting = useContext(SettingsContext);
  // const theme = createTheme(
  //   adaptV4Theme({
  //     theme: themeSeeting.settings.theme,
  //   })
  // );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      {/* <ThemeProvider
      // theme={theme}
      > */}
        <div className="App">
          {/*<MuiPickersUtilsProvider utils={MomentUtils}>
        <AuthContext> */}
          {/* <Router history={history}> */}
          {/* <UserContext> */}
          <ToastContainer />
          {/* Use the AppRouter component here */}
          <AppRouter />
          {/* </UserContext> */}
          {/* </Router> */}
          {/* </AuthContext>
      </MuiPickersUtilsProvider> */}
        </div>
      {/* </ThemeProvider> */}
    </StyledEngineProvider>
  );
}

export default App;
