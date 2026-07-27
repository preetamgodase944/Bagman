import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Divisions from "./components/Divisions/Divisions";
import Products from "./components/Products/Products";
import WhyGsia from "./components/WhyGsia/WhyGsia";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Training from "./components/Training/Training";
import "./App.css";
import TrainingDetailsPage from "./pages/TrainingDetailsPage";
import TradingDetailsPage from "./pages/TradingDetailsPage";
import FloatingButton from "./components/FloatingButton";
import { useReveal } from "./utils/useReveal";

function AppShell() {
  const location = useLocation();
  useReveal([location.pathname]);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className="main-content">
              <Hero />
              <Divisions />
              <Products />
              <WhyGsia />
              <Training />
              <Contact />
            </main>
          }
        />
        <Route path="/training/details" element={<TrainingDetailsPage />} />
        <Route path="/trading/details" element={<TradingDetailsPage />} />
      </Routes>
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}
