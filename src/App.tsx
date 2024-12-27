import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="container max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Outfit Mask Generator
          </h1>

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
