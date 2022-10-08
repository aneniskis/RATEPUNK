import React from "react";
import { useState } from "react";
import emailLogo from "../../assests/email icon.svg";
import Success from "./Success";
import { ReferralForm } from "./ReferralForm";
import "./form.scss";
import { BsCheckCircleFill } from "react-icons/bs";
import { fetchFromApi } from "../../constant/fetchFromApi";
import { useEffect } from "react";
import { updateApi } from "../../constant/fetchFromApi";

const Form = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [binEmail, setBinEmail] = useState("");

  useEffect(() => {
    fetchFromApi().then((data) => {
      setBinEmail(data.record.email);
    });
  }, [success]);

  const submitHandler = (e) => {
    e.preventDefault();

    const emailParts = email.split("@");

    if (email === binEmail) {
      setError("This e-mail has already been used");
      setEmail("");
    } else if (email.length < 1) {
      setError(`Input field can't be empty`);
      setEmail("");
    } else if (emailParts.length < 2) {
      setError(`Must be '@' symbol in email`);
      setEmail("");
    } else if (emailParts[0] === "") {
      setError(`Email do not have address before @  symbol`);
      setEmail("");
    } else if (emailParts[1] === "") {
      setError(`Email haven't domain after @ symbol (.com, .net)`);
      setEmail("");
    } else {
      updateApi({ email });
      setError("Your email is confirmed!");
      setEmail("");
      setSuccess(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="content">
        <h1>REFER FRIENDS AND GET REWARDS</h1>
        <p>
          Refer your friends to us and earn hotel booking vouchers. We'll give
          you 1 coin for each friend that installs our extension. Minimum
          cash-out at 20 coins.
        </p>
        <span
          style={
            success
              ? {
                  color: "#434a54",
                  textAlign: "center",
                  fontSize: "16px",
                  lineHeight: "20px",
                  fontWeight: "bold",
                }
              : { color: "#ed6f82" }
          }
        >
          {success && <BsCheckCircleFill style={{ color: "#8cd943" }} />}
          {error}
        </span>
      </div>
      <div className="formContent">
        {success ? (
          <Success />
        ) : (
          <ReferralForm
            submitHandler={submitHandler}
            emailLogo={emailLogo}
            email={email}
            setEmail={setEmail}
          />
        )}
        <p className="bottom">Limits on max rewards apply.</p>
      </div>
    </div>
  );
};

export default Form;
