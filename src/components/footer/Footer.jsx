import "./footer.scss";
import { IconList } from "./IconList";
import ratepunk from "../../assests/Group 12.svg";
import { QuickLinks } from "./QuickLinks";
import email from "../../assests/Icon feather-mail.svg";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="row">
        <div className="footerContent">
          <img src={ratepunk} alt="" />
          <h6>
            Ratepunk compares hotel room prices across the major online travel
            agencies. When you search for a room, Ratepunk extension scans the
            top booking sites and runs a price comparison, so you can be
            confident in knowing you’re getting the best deal!
          </h6>
          <p>&#169; 2022 Ratepunk. All Rights Reserved.</p>
        </div>
      </div>
      <div className="row">
        <div className="footerContact">
          <div className="quickLinks">
            <h2>Quick links</h2>
            <ul className="listOfLinks">
              <QuickLinks />
            </ul>
          </div>
          <div className="contacts">
            <div>
              <h2>Contact</h2>
              <div
                className="email"
                onClick={() => (window.location = "mailto:hi@ratepunk.com")}
              >
                <img src={email} alt="email" />
                <p>hi@ratepunk.com</p>
              </div>
            </div>
            <div>
              <h2>Social</h2>
              <IconList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
