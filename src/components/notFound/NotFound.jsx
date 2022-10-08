import React from "react";
import Footer from "../footer/Footer";
import { Stores } from "../mainContent/Stores";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../../button/Button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <h2 style={{ fontSize: "40px" }}>404. Ooops, page not found.</h2>
            {/* <button onClick={() => navigate("/")}>Get Referral Link</button> */}
            <div onClick={() => navigate("/")}>
              <Button
                type="button"
                title="Back to main page"
                padding="0 15px"
              />
            </div>
          </div>
        </div>
      </div>
      <Stores />
      <Footer />
      <Outlet />
    </>
  );
};

export default NotFound;
