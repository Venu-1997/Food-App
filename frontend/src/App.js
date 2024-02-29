
import './App.css';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Components/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './Components/Signup.js';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './Components/ContextReducer.js';
import MyOrders from './Components/MyOrders.js';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/orders" element={<MyOrders />} />
          </Routes>
        </BrowserRouter>
        <Toaster/>
      </CartProvider>
    </div>
  );
}

export default App;
