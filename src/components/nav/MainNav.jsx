import React from "react";

const styles = {
  wrapper: (theme) => ({
    backgroundColor: theme.color.darkest,
  }),
  navItem: {
    display: "inline-block",
    margin: "0 5px 0 0",
  },
};

const NavItem = ({ children }) => <p css={styles.navItem}>{children}</p>;

const MainNav = () => {
  return (
    <div css={styles.wrapper}>
      <NavItem></NavItem>
      <NavItem></NavItem>
    </div>
  );
};

export default MainNav;
