interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className: string;
  // disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  // disabled,
}) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

export default Button;
