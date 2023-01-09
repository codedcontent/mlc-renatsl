import FlexibleOptions from "./pages/FlexibleOptions";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import LivingCost from "./pages/LivingCost";
import NewProperty from "./pages/NewProperty";
import Properties from "./pages/Properties";
import Testimonials from "./pages/Testimonials";

const App = () => {
  return (
    <div className="w-screen min-h-screen overflow-hidden pb-10 relative bg-gray-100">
      <Home />

      <FlexibleOptions />

      <Properties />

      <LivingCost />

      <NewProperty />

      <Testimonials />

      <Footer />
    </div>
  );
};

export default App;
