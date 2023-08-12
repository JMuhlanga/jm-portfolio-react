import React from 'react'

const Contact = () => {
  return (
    <div id='contact-section'>
      <h3>Want to Hire Me ? :)</h3>
      <div className='mycontacts'>
        <h4>My Contacts</h4>
      
        <p><b>Email: </b>muhlangakupeka@outlook.com</p>
        <p><b>Phone1: </b>+254735219317</p>
        <p><b>Phone2: </b>+254113771641</p>
        <p><b>LinkedIn: </b>www.linkedin.com/in/josekmuhlanga</p>
        <p><b>Github: </b>www.github.com/JMuhlanga</p>
        <p><b>Twitter: </b>www.twitter.com/MuhlangaJose</p>
        <p><b>Instagram: </b>https://www.instagram.com/jnr_muhlanga/</p>

      </div>
      <div className='msg-form'>
        <h4>Send me A Message</h4>
        <form>
          <input type="email" name="email" placeholder="Enter your Email Here" />
          <br></br>
          <input type="text" name="Message" placeholder="Enter your Message here" />
          <br></br>
          <button type="submit" className='send-msg'>Send Message</button>
          
        </form>
      </div>

    </div>
    
  )
}

export default Contact