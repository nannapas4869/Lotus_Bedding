import { BrowserRouter as  Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      {/* 🔹 Header แสดงทุกหน้า */}
      <Header />

      {/* 🔹 เนื้อหาของแต่ละหน้า */}
      <main className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* 🔹 Footer แสดงทุกหน้า */}
      <Footer />

    </>

  );
}

export default App;
