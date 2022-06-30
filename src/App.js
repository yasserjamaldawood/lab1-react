import "./App.css";
import CounterPage from "./pages/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ColorSchemesExample from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { SingleProduct } from "./pages/SingleProduct";
import Todo from "./pages/Todo"

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <ColorSchemesExample></ColorSchemesExample>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/counter" element={<CounterPage />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/toDo" element={<Todo/>}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shop/:id" element={<SingleProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
