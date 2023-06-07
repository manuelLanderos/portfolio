import React, { useState } from 'react'
import './contact.css'


function Contact() {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')

  function handleFormSubmit(event) {
    event.preventDefault()
    const emailLink = `mailto:manuel.landeros@icloud.com?subject=New Message from ${name}&body=${message}`;
    window.location.href = emailLink
  }
  function handleNameChange(event) {
    setName(event.target.value)
  }
  function handleMessageChange(event) {
    setMessage(event.target.value)
  }
  return (
    <div id="contact" className="wrapper">
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="pageTitle title">Contact </div>
        <div className="secondaryTitle title">Please fill this form to contact Manuel Landeros.</div>
        <input type="text" className="name formEntry" placeholder="Name" onChange={handleNameChange} />
        {/* <input type="text" className="email formEntry" placeholder="Email" /> */}
        <textarea class="message formEntry" placeholder="Message" onChange={handleMessageChange}></textarea>

        <br></br>
        <button className="submit formEntry" >Submit</button>
      </form>

    </div >

  )
}

export default Contact
