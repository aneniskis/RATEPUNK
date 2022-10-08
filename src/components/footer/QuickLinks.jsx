import { quickLinks } from "../../constant/constant";
import { Link } from "react-router-dom";

export const QuickLinks = () => {
  return (
    <>
      {quickLinks.map((link, i) => (
        <Link className="link " key={i}>
          {link.title}
        </Link>
      ))}
    </>
  );
};
