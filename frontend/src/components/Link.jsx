import { useContext } from "react";
import { PagesContext } from "../contexts/PagesContext";

const Link = ({ className, children, to }) => {
  const { pathState } = useContext(PagesContext);
  const handleClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", to);
    pathState.setPath(to);
  };
  return (
    <a className={className} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
