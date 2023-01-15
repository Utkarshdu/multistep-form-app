import React from "react"
import thanksLogo from "../images/icon-thank-you.svg"

const Thanks = () => {
  return (
    <div className='thanks-container'>
      <img className='thanks-image' src={thanksLogo} alt='Thanks You' />
      <h2 className='thank-you'>Thank you!</h2>
      <p>
        Thanks for comfirming your subscription! We hope you have fun using our
        platform.
      </p>
    </div>
  )
}

export default Thanks
