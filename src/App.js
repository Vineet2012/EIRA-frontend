import { Route, Routes } from "react-router-dom";
import GeneralLayoutCmp from "./components/GeneralLayouCmp";
import ScrollToTopCmp from "./components/ScrollToTopCmp";
import CreateRetreatPage from "./pages/CreateRetreat/CreateRetreatPage";
import HomePage from "./pages/Home/HomePage";
import ItineraryPage from "./pages/Itinerary/ItineraryPage";
import ForgotPasswordPage from "./pages/LoginSignupPages/ForgotPasswordPage";
import LoginPage from "./pages/LoginSignupPages/LoginPage";
import NewPasswordPage from "./pages/LoginSignupPages/NewPasswordPage";
import PasswordChangedPage from "./pages/LoginSignupPages/PasswordChangedPage";
import SignupPage from "./pages/LoginSignupPages/SignupPage";
import VerifyOtpPage from "./pages/LoginSignupPages/VerifyOtpPage";
import MyTripsPage from "./pages/MyTrips/MyTripsPage";
import OnboardingFormCmp from "./pages/Onboarding/OnboardingFormCmp";
import OnboardingPage from "./pages/Onboarding/OnboardingPage";
import OnboardingWelcomeCmp from "./pages/Onboarding/OnboardingWelcomeCmp";
import SettingsPage from "./pages/Settings/SettingsPage";
import ShopPage from "./pages/Shop/ShopPage";
import SupportInitialPageCmp from "./pages/Support/SupportInitialPageCmp";
import SupportPage from "./pages/Support/SupportPage";
import SupportSearchResultsCmp from "./pages/Support/SupportSearchResultsCmp";
import ToolboxPage from "./pages/Toolbox/ToolboxPage";
import ToolboxPostPage from "./pages/Toolbox/ToolboxPostPage";
import ToolboxTopicPage from "./pages/Toolbox/ToolboxTopicPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GeneralLayoutCmp />}>
          <Route path="home" element={<HomePage />} />
          <Route path="create-retreat" element={<CreateRetreatPage />} />
          <Route path="my-trips">
            <Route path="" element={<MyTripsPage />} />
            <Route path="itinerary/:tripId" element={<ItineraryPage />} />
          </Route>
          <Route path="shop" element={<ShopPage />} />
          <Route path="toolbox">
            <Route path="" element={<ToolboxPage />} />
            <Route path="topic/:topicId" element={<ToolboxTopicPage />} />
            <Route path="topic/:topicId/:postId" element={<ToolboxPostPage />} />
          </Route>
          <Route path="support" element={<SupportPage />}>
            <Route path="" element={<SupportInitialPageCmp />} />
            <Route path=":search" element={<SupportSearchResultsCmp />} />
          </Route>
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-otp" element={<VerifyOtpPage />} />
        <Route path="/new-password" element={<NewPasswordPage />} />
        <Route path="/password-changed" element={<PasswordChangedPage />} />
        <Route path="/onboarding" element={<OnboardingPage />}>
          <Route path="" element={<OnboardingWelcomeCmp />} />
          <Route path="form" element={<OnboardingFormCmp />} />
        </Route>
      </Routes>
      <ScrollToTopCmp />
    </>
  );
}
