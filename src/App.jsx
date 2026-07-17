import Navbar from "./components/Navbar.jsx";
import HeroCarousel from "./components/HeroCarousel.jsx";
import SubOrganizations from "./components/SubOrganizations.jsx";
import Equipment from "./components/Equipment.jsx";
import HowToAvail from "./components/HowToAvail.jsx";
import LocationHours from "./components/LocationHours.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroCarousel />
        <SubOrganizations />
        <Equipment />
        <HowToAvail />
      </main>
      <LocationHours />
    </div>
  );
}
