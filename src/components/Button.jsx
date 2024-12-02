import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  // Set default and conditional classes
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-white" : "text-white"} ${className || ""}`;  // Ensure white text when 'white' is true

  const spanClasses = "relative z-10";

  // Button for onClick
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  // Link rendering for href
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  // Return button or link based on the presence of 'href'
  return href ? renderLink() : renderButton();
};

export default Button;
