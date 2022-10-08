import { listOfSocials } from "../../constant/constant";
import { Link, useNavigate } from "react-router-dom";

export const IconList = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {listOfSocials.map((social, i) => (
        <Link
          target="_blank"
          onClick={() => navigate(window.open(social.link))}
          key={i}
        >
          {social.image}
        </Link>
      ))}
    </div>
  );
};
