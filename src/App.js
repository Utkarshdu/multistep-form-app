import "./App.css"
import Steps from "./Components/Steps"
import PersonalInfo from "./Components/PersonalInfo"
import SelectPlan from "./Components/SelectPlan"
import AddOns from "./Components/AddOns"
import Summary from "./Components/Summary"
import Thanks from "./Components/Thanks"
import { useEffect, useState } from "react"

function App() {
  const [index, setIndex] = useState(0)
  // PERSONAL INFO STATES
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [error, setError] = useState(["", "", ""])
  // DISPLAY STATES
  const [personalDetails, setPersonalDetails] = useState(true)
  const [plan, setPlan] = useState(false)
  const [addOn, setAddOn] = useState(false)
  const [summary, setSummary] = useState(false)
  const [thanks, setThanks] = useState(false)

  const inputInfo = [name, email, phone]

  const nextStep = () => {
    const newError = ["", "", ""]
    if (index === 0) {
      if (name && email && phone) {
        if (email.includes("@")) {
          setIndex(index + 1)
        } else {
          newError[1] = "Invalid email"
        }
      } else {
        inputInfo.forEach((input, i) => {
          if (!input) {
            newError[i] = "This field is required"
          }
        })
      }
    } else {
      setIndex(index + 1)
    }
    setError(newError)
  }

  const swithSteps = () => {
    switch (index) {
      case 1:
        setPersonalDetails(false)
        setPlan(true)
        setAddOn(false)
        setSummary(false)
        setThanks(false)
        break
      case 2:
        setPersonalDetails(false)
        setPlan(false)
        setAddOn(true)
        setSummary(false)
        setThanks(false)
        break
      case 3:
        setPersonalDetails(false)
        setPlan(false)
        setAddOn(false)
        setSummary(true)
        setThanks(false)
        break
      case 4:
        setPersonalDetails(false)
        setPlan(false)
        setAddOn(false)
        setSummary(false)
        setThanks(true)
        break
      default:
        setPersonalDetails(true)
        setPlan(false)
        setAddOn(false)
        setSummary(false)
        setThanks(false)
        break
    }
  }

  useEffect(() => {
    // if (index === 0) {
    //   // alert("not allowed")
    // } else {
    swithSteps()
    // }
  })

  // console.log(index)

  return (
    <div className='App'>
      <Steps currentStep={index} />
      <article className='displays'>
        {personalDetails && (
          <PersonalInfo
            name={name}
            email={email}
            phone={phone}
            setName={(e) => setName(e.target.value)}
            setEmail={(e) => setEmail(e.target.value)}
            setPhone={(e) => setPhone(e.target.value)}
            error={error}
          />
        )}
        {plan && <SelectPlan />}
        {addOn && <AddOns />}
        {summary && <Summary gotoPlan={() => setIndex(1)} />}
        {thanks && <Thanks />}
      </article>

      <section className={`next-and-back ${index > 3 && "hide-next-and-back"}`}>
        <button
          className={`back-btn ${index === 0 && "hide-back-btn"}`}
          onClick={() => setIndex(index - 1)}
        >
          Go Back
        </button>
        <button
          className={`next-btn ${index > 2 && "change-next-btn"}`}
          onClick={nextStep}
        >
          {`${index > 2 ? "Confirm" : "Next Step"}`}
        </button>
      </section>
    </div>
  )
}

export default App
