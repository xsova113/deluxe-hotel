import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./scenes/homePage";
import { useMemo } from "react";
import { themeSettings } from "@/theme";
import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";
import { AboutUs } from "@/scenes/aboutUs";
import Navbar from "@/scenes/navbar";
import Contact from "@/scenes/contact";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "./scenes/footer";
import PlatinumPage from "./scenes/platinum";
import Occasions from "./scenes/occasions";
import OurRooms from "./scenes/ourRooms";

function App() {
  const { palette } = useTheme();
  const theme = useMemo(() => createTheme(themeSettings), []);
  const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ClerkProvider
            publishableKey={clerkPubKey}
            appearance={{
              variables: { colorPrimary: palette.primary.main },
            }}
          >
            <Navbar />
            <ParallaxProvider>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/occasions" element={<Occasions />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/ourRooms" element={<OurRooms />} />
                <Route path="/reservation" />
                <Route path="/platinum" element={<PlatinumPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/sign-in/*"
                  element={<SignIn routing="path" path="/sign-in" />}
                />
                <Route
                  path="/sign-up/*"
                  element={<SignUp routing="path" path="/sign-up" />}
                />
              </Routes>
            </ParallaxProvider>
            <Footer />
          </ClerkProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
