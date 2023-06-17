import { useContext } from "react";
import { PagesContext } from "../contexts/PagesContext";

const Router = ({ route, Component, componentProps }) => {
  const { pathState } = useContext(PagesContext);
  if (pathState.path === route) return Component(componentProps);
};

export default Router;
