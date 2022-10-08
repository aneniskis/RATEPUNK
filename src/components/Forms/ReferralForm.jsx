import React from "react";
import { Button } from "../../button/Button";

export const ReferralForm = ({ submitHandler, emailLogo, email, setEmail }) => {
  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <img src={emailLogo} alt="emailLogo" />
        <input
          name="email"
          placeholder={"Enter your email address"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button type="submit" title="Get Referral Link" />
      </form>
    </>
  );
};
