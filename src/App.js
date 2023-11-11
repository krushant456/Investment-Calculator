import Header from "./components/Header.js";
import Results from "./components/Results.js";
import UserInput from "./components/UserInput.js";
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIndentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIndentifier]:+newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />

      {!inputIsValid && <p className="center">please enter valid input data  </p>}
      {inputIsValid && <Results input={userInput} />}

    </>
  );
}

export default App;