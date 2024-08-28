import React from "react";

function Form() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1881675d-8e45-4e11-86da-c079267129ad");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" required/> <br />
        <input type="email" name="email" required/><br />
        <textarea name="message" required></textarea><br />

        <button type="submit">Submit Form</button><br />

      </form>
      <span>{result}</span>

    </div>
  );
}

export default Form;