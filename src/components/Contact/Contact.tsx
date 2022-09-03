import { useState } from "react";
import cl from "./contact.module.scss";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const [inputs, setInput] = useState({
    name: "",
    purpose: "",
    responseAt: "",
    message: "",
  });

  const changeState = (
    key: "name" | "purpose" | "message" | "responseAt",
    value: string
  ) => {
    const temp = { ...inputs };
    temp[key] = value.toLowerCase();
    setInput(temp);
  };

  return (
    <section className={cl.wrapper}>
      <p className={cl.title}>Get in touch</p>
      <div className={cl.letter}>
        <div className={cl.line}>
          <div className={cl.substring}>
            <label>Hi, My name is</label>{" "}
            <textarea
              value={inputs.name}
              className={cl.name}
              placeholder="your name"
              rows={1}
              onChange={(e) => changeState("name", e.target.value)}
            />{" "}
          </div>
          <div className={cl.substring}>
            <label>I'm writing you for</label>{" "}
            <textarea
              className={cl.purpose}
              value={inputs.purpose}
              rows={1}
              placeholder="purpose of the letter"
              onChange={(e) => changeState("purpose", e.target.value)}
            />
          </div>
        </div>
        <div className={cl.line}>
          <label>Wait for your answer at </label>{" "}
          <textarea
            value={inputs.responseAt}
            className={cl.mail}
            rows={1}
            placeholder="your email or messanger"
            onChange={(e) => changeState("responseAt", e.target.value)}
          />
        </div>
        <textarea
          value={inputs.message}
          className={cl.message}
          placeholder="Your message"
          onChange={(e) => changeState("message", e.target.value)}
        ></textarea>
        <button className={cl.sendBtn}>
          <svg preserveAspectRatio="none" viewBox="0 0 546.714 178.143">
            <path d="M546.214 89.072c0 48.917-122.162 88.571-272.857 88.571C122.662 177.643.5 137.988.5 89.072.5 40.155 122.662.5 273.357.5c150.695 0 272.857 39.655 272.857 88.572z" />
          </svg>
          Send
        </button>
      </div>
    </section>
  );
};

export default Contact;
