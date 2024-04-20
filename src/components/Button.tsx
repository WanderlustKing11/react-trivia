interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
