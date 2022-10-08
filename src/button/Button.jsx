import "./button.scss";

export const Button = ({ title, padding, type }) => {
  return (
    <button type={type} style={{ padding: padding }}>
      {title}
    </button>
  );
};
