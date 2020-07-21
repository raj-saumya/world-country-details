import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Card from "./components/Card";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

function App() {
  const [countryDetails, setCountryDetails] = useState([]);
  const [search, setSearchCountry] = useState("");

  const [region, setRegion] = React.useState("Filter By Region");
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setRegion(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(resp => {
      setCountryDetails(resp.data);
    });
  }, []);

  const [darkTheme, setDarkTheme] = React.useState(false);
  const toggleTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };

  const searchCountry = () => {
    axios
      .get(
        `https://restcountries.eu/rest/v2/${search ? "name/" + search : "all"}`
      )
      .then(resp => {
        setCountryDetails(resp.data);
      });
  };

  return (
    <div className={darkTheme ? "dark-theme" : "light-theme"}>
      <Header darkTheme={darkTheme} toggleTheme={toggleTheme}></Header>
      <div className="filter-section">
        <div className="search">
          <SearchIcon
            style={{
              height: "18px",
              paddingRight: "8px",
              color: "#8e8d8d",
              cursor: "pointer"
            }}
            onClick={searchCountry}
          />
          <InputBase
            value={search}
            onChange={d => setSearchCountry(d.target.value)}
            className="input"
            placeholder="Searh for a country..."
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div style={{ flex: 2 }}></div>
        <div>
          <Select
            className="search"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={region}
            onChange={handleChange}
          >
            <MenuItem value="Filter By Region">Filter By Region</MenuItem>
            <MenuItem value={"Asia"}>Asia</MenuItem>
            <MenuItem value={"America"}>America</MenuItem>
            <MenuItem value={"Africa"}>Africa</MenuItem>
            <MenuItem value={"Europe"}>Europe</MenuItem>
            <MenuItem value={"Oceania"}>Oceania</MenuItem>
          </Select>
        </div>
      </div>
      <div className="all-countries">
        {countryDetails.map((detail, index) => {
          return <Card key={index} {...detail}></Card>;
        })}
      </div>
    </div>
  );
}

export default App;
