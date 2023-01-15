import React from "react"

const PersonalInfo = ({
  name,
  email,
  phone,
  setName,
  setEmail,
  setPhone,
  error,
}) => {
  return (
    <div className='personal-info-container'>
      <h2 className='personal-info-header'>Personal info</h2>
      <p className='info'>
        Please provide your name, email address, and phone number
      </p>
      <article className='label-and-error'>
        <label htmlFor='name'>Name</label>
        <span className='error'>{error[0]}</span>
      </article>
      <input
        type='text'
        name='name'
        id='name'
        placeholder='Utkarsh Dubey'
        value={name}
        onChange={setName}
      />
      <article className='label-and-error'>
        <label htmlFor='email'>Email Address</label>
        <span className='error'>{error[1]}</span>
      </article>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='utkarshdubey@gmail.com'
        value={email}
        onChange={setEmail}
      />
      <article className='label-and-error'>
        <label htmlFor='tel'>Phone Number</label>
        <span className='error'>{error[2]}</span>
      </article>
      <input
        type='tel'
        name='tel'
        id='tel'
        placeholder='+91 3943948934'
        value={phone}
        onChange={setPhone}
      />
    </div>
  )
}

export default PersonalInfo
