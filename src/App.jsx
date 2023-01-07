import FlexibleOptions from "./pages/FlexibleOptions";
import Home from "./pages/Home";
import LivingCost from "./pages/LivingCost";
import Properties from "./pages/Properties";

const App = () => {
  return (
    <div className="w-screen min-h-screen overflow-hidden">
      <Home />

      <LivingCost />

      <Properties />

      <FlexibleOptions />
    </div>
  );
};

export default App;
