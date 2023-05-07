import FormDetails from "./components/FormDetails";
import Header from "./components/Header";
import Show from "./components/Show";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<FormDetails />} />
          <Route exact path="/show" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
