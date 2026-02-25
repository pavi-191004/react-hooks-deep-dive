import CheckNetwork from "./components/useEffect/CheckNetwork";
import { ShoppingCart } from "./components/useReducer/ShoppingCart";
import StopWatch from "./components/useRef/StopWatch";
import SeatBooking from "./components/useState/SeatBooking";
import { LanguageProvider } from "./components/useContext/context/LanguageContext";
import { MultilingualForm } from "./components/useContext/components/MultilingualForm";
import { LanguageSwitcher } from "./components/useContext/components/LanguageSwitcher";
import DisplayProduct from "./components/useCallback/DisplayProduct";
function App() {
  return (
    <div className="App">
      {/* <SeatBooking/> */}
      {/* <ShoppingCart/> */}
      {/* <CheckNetwork/> */}
      {/* <StopWatch/> */}
      {/* <LanguageProvider>
      <LanguageSwitcher />
      <MultilingualForm />
    </LanguageProvider> */}
      <DisplayProduct />
    </div>
  );
}

export default App;
