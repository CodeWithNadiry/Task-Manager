import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 30px;
  border-radius: 6px;
  font-weight: 500;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border: none;
  transition: all 0.2s ease;

  background-color: ${({ variant }) =>
    variant === "danger"
      ? "#dc2626"
      : variant === "success"
        ? "#16a34a"
        : variant === "warning"
          ? "#eab308"
          : "#4f46e5"};

  color: white;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    transform: scale(0.97);
  }

  @media (min-width: 768px) {
    & {
      padding: 15px 50px;
    }
  }

  @media (min-width: 900px) {
    padding: 15px 50px;
  }
`;

const Button = ({ children, variant = "primary", disabled, ...props }) => {
  return (
    <StyledButton variant={variant} {...props} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
