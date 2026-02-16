import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 30px;
  border-radius: 6px;
  font-weight: 500;
  border: none;
  color: white;
  transition: all 0.2s ease;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  background-color: ${({ disabled, variant }) => {
    if (disabled) return "#dadada";

    switch (variant) {
      case "danger":
        return "#dc2626";
      case "success":
        return "#16a34a";
      case "warning":
        return "#eab308";
      default:
        return "#4f46e5"; // primary
    }
  }};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 1 : 0.85)};
  }

  &:active {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(0.97)")};
  }

  @media (min-width: 768px) {
    padding: 15px 50px;
  }
`;

const Button = ({ children, variant = "primary", disabled, ...props }) => {
  return (
    <StyledButton variant={variant} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;