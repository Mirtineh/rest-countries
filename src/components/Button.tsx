import { FunctionComponent } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({ label, onClick }) => {
  return (
    <>
      <button
        className="py-1 px-6 rounded-sm bg-dark-blue"
        onClick={() => onClick()}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
