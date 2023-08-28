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
import OurRooms from "./scenes/ourRooms";
import Reservation from "./scenes/reservation";
import { Toaster } from "react-hot-toast";
import MyBookings from "./scenes/myBookings";
import VancouverPage from "./scenes/vancouverPage";
import RichmondPage from "./scenes/richmondPage";
import VictoriaPage from "./scenes/victoriaPage";
import DestinationsPage from "./scenes/destinations";
import WeddingsPage from "./scenes/weddings";
import CelebratePage from "./scenes/celebrate";
import MeetPage from "./scenes/meet";
import SpaPage from "./scenes/spa";
import PoolPage from "./scenes/pool";
import DiningPage from "./scenes/dining";

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
            <Toaster />
            <Navbar />
            <ParallaxProvider>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/occasions" />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/ourRooms" element={<OurRooms />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/platinum" element={<PlatinumPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/myBookings/:id" element={<MyBookings />} />
                <Route path="/vancouver" element={<VancouverPage />} />
                <Route path="/richmond" element={<RichmondPage />} />
                <Route path="/victoria" element={<VictoriaPage />} />
                <Route path="/destinations" element={<DestinationsPage />} />
                <Route path="/weddings" element={<WeddingsPage />} />
                <Route path="/celebrate" element={<CelebratePage />} />
                <Route path="/meet" element={<MeetPage />} />
                <Route path="/spa" element={<SpaPage />} />
                <Route path="/pool" element={<PoolPage />} />
                <Route path="/dining" element={<DiningPage />} />
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
