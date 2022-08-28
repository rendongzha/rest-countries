// import './App.css';
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Header from "./components/Header";
import ThemeContext from "./store/theme-context";
import CountryDetail from "./pages/CountryDetail";
import HomePage from "./pages/HomePage";

function App() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div data-theme={darkTheme} className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path=":countryId" element={<CountryDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
