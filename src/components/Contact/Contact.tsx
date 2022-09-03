import { FormEvent, useRef, useState } from "react";
import emailjs from "emailjs-com";
import cl from "./contact.module.scss";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const [inputs, setInput] = useState({
    name: "",
    purpose: "",
    responseAt: "",
    message: "",
  });
  const [sended, setSended] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const changeState = (
    key: "name" | "purpose" | "message" | "responseAt",
    value: string
  ) => {
    const temp = { ...inputs };
    temp[key] = value.toLowerCase();
    setInput(temp);
  };

  const sendLetter = (e: FormEvent) => {
    e.preventDefault();
    if (formRef.current !== null)
      emailjs
        .sendForm(
          "service_x1bf65n",
          "template_8kdcj1j",
          formRef.current,
          "vCJK7dwwaLzo_Vrwe"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSended(true);
            setInput({
              name: "",
              purpose: "",
              responseAt: "",
              message: "",
            });
          },
          (error) => {
            alert(error.text);
          }
        );
  };
  return (
    <section className={cl.wrapper}>
      <p className={cl.title}>Get in touch</p>
      {sended ? (
        <div>
          I have been received your message{" "}
          <i className="fa-solid fa-circle-check"></i>
        </div>
      ) : (
        <form className={cl.letter} ref={formRef} onSubmit={sendLetter}>
          <div className={cl.line}>
            <div className={cl.substring}>
              <label>Hi, My name is</label>{" "}
              <textarea
                required
                name="name"
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
                required
                name="purpose"
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
              required
              name="responseAt"
              value={inputs.responseAt}
              className={cl.mail}
              rows={1}
              placeholder="your email or messanger"
              onChange={(e) => changeState("responseAt", e.target.value)}
            />
          </div>
          <textarea
            required
            name="message"
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
        </form>
      )}
    </section>
  );
};

export default Contact;
