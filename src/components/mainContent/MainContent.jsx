import React from "react";
import Form from "../Forms/Form";
import Steps from "./Steps";
import Footer from "../footer/Footer";
import "./mainContent.scss";
import { Stores } from "./Stores";
import { Outlet } from "react-router-dom";

export const MainContent = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <Form />
          <Steps />
        </div>
      </div>
      <Stores />
      <Footer />
      <Outlet />
    </>
  );
};
