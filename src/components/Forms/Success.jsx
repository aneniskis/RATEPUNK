import { useState } from "react";
import { useEffect } from "react";
import "./success.scss";

const Success = () => {
  const defaultValue = "https://ratepunk.com/referral";
  const [size, setSize] = useState(window.innerWidth);
  const [text, setText] = useState(defaultValue);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (size < 600) {
        setSize(window.innerWidth);
      } else {
        setSize(window.innerWidth);
      }
    });
  }, [size]);

  const submitHandler = async (e) => {
    e.preventDefault();
    await navigator.clipboard.writeText(text);
    alert("URL copied");
  };

  return (
    <>
      <form
        className={size <= 600 ? "minSize" : "formSuccess"}
        onSubmit={submitHandler}
      >
        <input type="text" defaultValue={defaultValue} />
        <button
          type="text"
          onClick={(e) => {
            setText(defaultValue);
          }}
          disabled={!text}
        >
          {size <= 415 ? "Copy URL" : "Copy"}
        </button>
      </form>
    </>
  );
};

export default Success;
