import react, { useState } from "react";
function Form() {
  const [input, changeInput] = useState({ textarea: "", email: "" });
  function collect(e) {
    const { name, value } = e.target;
    changeInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function submission(e) {
    console.log(input);
    e.preventDefault();
    fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input,
      }),
    }).then((data) => console.log(data));
    changeInput({ textarea: "", email: "" });
  }
  return (
    <form id="form">
      <h1>Contact Us Now!</h1>
      <textarea
        name="textarea"
        onChange={collect}
        placeholder="Your Message"
        value={input.textarea}
      ></textarea>
      <input
        name="email"
        onChange={collect}
        type="email"
        placeholder="Your Email"
        value={input.email}
      />
      <button onClick={submission} type="submit">
        Submit
      </button>
    </form>
  );
}
export default Form;
