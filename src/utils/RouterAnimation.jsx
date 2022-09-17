export const RouterAnimation = () => {
  return {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
    transition: { duration: 0.5, ease: "easeInOut" }
  };
};
export const MenuMainRouterAnimation = () => {
  return {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
    transition: { duration: 0.5, ease: "easeInOut" }
  };
};
export const foodPageChanging = () => {
  return {
    initial: { opacity: 0, y: "-100px" },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "-100px" },
    transition: { duration: 0.5, ease: "easeInOut" }
  };
};
