import { useState } from 'react'
import { calculateInvestmentResults, } from './util/investment'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Result from './components/Result'
function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const isValidInput = userInput.duration >= 1

  function handleInputChange(changedInputKey, changedInputValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [changedInputKey]: Number.parseFloat(changedInputValue) || 0
      }
    })
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleInputChange} />
      {!isValidInput && <p className="center">Please enter a duration greater than zero!</p>}
      {isValidInput && <Result input={userInput} />}
    </>
  )
}

export default App
