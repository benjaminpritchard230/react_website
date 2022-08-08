import { React, useState } from "react";
import Homepage from "./components/homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Fuelcalculator from "./components/fuelcalculator";
import Navbar from "./components/navbar";
import Birthday from "./components/birthday";
import Hangman from "./components/hangman";
import Laptop from "./components/laptop";
import RockPaperScissors from "./components/rockpaperscissors";
import MortgageCalculator from "./components/mortgage";
import HangmanGame from "./components/hangman2";

function App() {
  const [vehicleMpg, setVehicleMpg] = useState(0);
  const [fuelCost, setFuelCost] = useState(0);
  const [distance, setDistance] = useState(0);
  const [birthDate, setBirthdate] = useState(0);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/fuel"
          element={
            <Fuelcalculator
              // send hooks to component. Use parseFloat to convert string to float.
              vehicleMpg={parseFloat(vehicleMpg)}
              setVehicleMpg={setVehicleMpg}
              fuelCost={parseFloat(fuelCost)}
              setFuelCost={setFuelCost}
              distance={parseFloat(distance)}
              setDistance={setDistance}
            />
          }
        />
        <Route
          path="/birthday"
          element={
            <Birthday birthDate={birthDate} setBirthdate={setBirthdate} />
          }
        />
        <Route path="hangman" element={<Hangman />} />
        <Route path="hangmangame" element={<HangmanGame />} />

        <Route path="laptop" element={<Laptop />} />
        <Route path="/rps" element={<RockPaperScissors />} />
        <Route path="/mortgage" element={<MortgageCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
