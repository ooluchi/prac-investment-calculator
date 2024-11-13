import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});

const inputIsValid = userInput.duration >= 1;

function handleChange(inputIdentifier, newValue) {
  setUserInput((previousInput) => ({
      ...previousInput,
      [inputIdentifier]: +newValue,
  }));
}

  return (
    <>
   <Header />
  <UserInput userInput={userInput}  onChange={handleChange} />
  {!inputIsValid && }
  {inputIsValid && <Results input={userInput} />}
   </>
  )
}


export default App
