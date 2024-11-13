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


  return (
    <>
   <Header />
   <UserInput />
   </>
  )
}

export default App
