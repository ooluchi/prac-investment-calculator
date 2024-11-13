import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});

function handleChange(inputIdentifier, newValue) {
  setUserInput((previousInput) => ({
      ...previousInput,
      [inputIdentifier]: newValue,
  }));
}

  return (
    <>
   <Header />
  <UserInput onChange= />
   </>
  )
}

export default App