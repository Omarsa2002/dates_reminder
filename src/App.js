import DatesContainer from "./components/container";
import AddDate from "./components/addDate"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DatesContainer/>}/>
          <Route path="/add" element={<AddDate/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
