
import './App.css';
import CheckNetwork from './components/useEffect/CheckNetwork';
import { ShoppingCart} from './components/useReducer/ShoppingCart';
import SeatBooking from './components/useState/SeatBooking';

function App() {
  return (
    <div className="App">
      <SeatBooking/>
      {/* <ShoppingCart/> */}
      {/* <CheckNetwork/> */}
    </div>
  );
}

export default App;
