import FlexibleOptions from "./pages/FlexibleOptions";
import Home from "./pages/Home";
import LivingCost from "./pages/LivingCost";
import NewProperty from "./pages/NewProperty";
import Properties from "./pages/Properties";

const App = () => {
  return (
    <div className="w-screen min-h-screen overflow-hidden pb-10">
      <Home />

      <LivingCost />

      <Properties />

      <FlexibleOptions />

      <NewProperty />
    </div>
  );
};

export default App;
