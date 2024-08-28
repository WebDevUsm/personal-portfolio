import React from 'react'
// import "./FormSection.css";
// import Form from '../form/form';

const FormSection = () => {
  return (
    <div>
{/* <div className="container2">
 
  <div className="content1">
<h1>
  Lets Work Together!
</h1>
<p>Lets Discuss on <br /> Something Cool <br /> Together</p>

  </div>


<div className="form">
  <Form></Form>
</div>
</div> */}
<div className='container-3'>
      <div className="hero-1">
          <div className="h">
          <h1>Lets <span>Work</span> Together!</h1>
          </div>
        <div className="f">
        <div className="talk">
          <h3>Let's discuss on something <span >Cool</span> together.</h3>
        </div>
        <div className="form">
        <input type="text" placeholder="Your Name"/> <br />
        <input type="text" placeholder="Your E-mail"/> <br />
        <textarea placeholder="Your Message..."></textarea> <br />
        <button>Submit</button>
        </div>
        </div>
      </div>
    </div>






    </div>
  )
}

export default FormSection;
