// import './App.css';
import { Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";
import Header from "./components/Header";
import ThemeContext from "./store/theme-context";
import CountryDetail from "./pages/CountryDetail";
import HomePage from "./pages/HomePage";

function App() {
  const { darkTheme } = useContext(ThemeContext);
  const [country, setCountry] = useState("");
  const searchHandler = (searchedCountry) => {
    setCountry(searchedCountry);
  };

  const [region, setRegion] = useState("");
  const filterHandler = (filteredRegion) => {
    setRegion(filteredRegion);
  };

  return (
    <div data-theme={darkTheme} className="app">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onSearch={searchHandler}
                onFilter={filterHandler}
                country={country}
                region={region}
              />
            }
          />
          <Route path=":countryId" element={<CountryDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
