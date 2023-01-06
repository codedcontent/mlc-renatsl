import Home from "./pages/Home";
import LivingCost from "./pages/LivingCost";
import Properties from "./pages/Properties";

const App = () => {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      <Home />

      <LivingCost />

      <Properties />
    </div>
  );
};

export default App;
