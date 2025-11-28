import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { LandingPage } from "./pages/landingPages/LandingPage";
import LandingHeader from "./componets/landingPages/LandingHeader";
import LandingFooter from "./componets/landingPages/LandingFooter";
import WebsiteHeader from "./componets/website/WebsiteHeader";
import WebsiteFooter from "./componets/website/WebsiteFooter";
import { routes } from "./constant";
import { Suspense, useEffect } from "react";
import { LoadingSpinner } from "./componets/common/LoadingSpinner";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./componets/SpinnerContext";
import ServicePageLayout from "./layout/ServicePageLayout";
import AppDevelopment from "./componets/website/serivces/AppDevelopment.jsx";
import WebAppDevelopment from "./componets/website/serivces/WebAppDevelopment.jsx";
import ArtificialIntelligence from "./componets/website/serivces/ArtificialIntelligence.jsx";
import ChatbotDevelopment from "./componets/website/serivces/ChatbotDevelopment.jsx";
import DataAnalytics from "./componets/website/serivces/DataAnalytics.jsx";
import CloudComputing from "./componets/website/serivces/CloudComputing.jsx";
import WhatsAppIcon from "./componets/common/Whatsapp.jsx";
import { Toaster } from "react-hot-toast";
import Thankyou from "./componets/common/ThankYou.jsx";
import BlogDetails from "./pages/website/BlogDetails.jsx";

AOS.init({
  once: true,
  duration: 500,
  offset: 0,
});

export default function App() {
  return (
    <SpinnerContextProvider>
      <LoadingSpinnerContext />
      <Suspense fallback={<LoadingSpinner />}>
        <WhatsAppIcon />
        <Toaster
          position="top-bottom"
          toastOptions={{
            style: {
              background: "#010C2A",
              color: "#ffffff",
            },
          }}
        />
        <ScrollToTop />
        <Routes>
          {/* Website Pages */}
          {routes.map(({ component, name, path }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <>
                  <WebsiteHeader name={name} />
                  {component}
                  <WebsiteFooter />
                </>
              }
            />
          ))}

          <Route
            path="/blogs/:id"
            element={
              <>
                <WebsiteHeader />
                <BlogDetails />
                <WebsiteFooter />
              </>
            }
          />

          <Route path="/thank-you" element={<Thankyou />} />

          <Route path="/services" element={<ServicePageLayout />}>
            <Route path="app-development" element={<AppDevelopment />} />
            <Route path="web-app-development" element={<WebAppDevelopment />} />
            <Route path="ai-development" element={<ArtificialIntelligence />} />
            <Route
              path="chatbot-development"
              element={<ChatbotDevelopment />}
            />
            <Route path="data-analytics" element={<DataAnalytics />} />
            <Route path="cloud-computing" element={<CloudComputing />} />
          </Route>

          {/* Landing Pages */}
          <Route
            path="/web-development"
            element={
              <>
                <LandingHeader />
                <LandingPage page={"web-development"} />
                <LandingFooter />
              </>
            }
          />
          <Route
            path="/app-development"
            element={
              <>
                <LandingHeader />
                <LandingPage page={"app-development"} />
                <LandingFooter />
              </>
            }
          />
        </Routes>
      </Suspense>
    </SpinnerContextProvider>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return null;
};
