import { Global } from "@emotion/react";

const GlobalStyles = () => {
  const globalStyles = (theme) => ({
    html: {
      backgroundColor: theme.color.darker,
      color: theme.color.lighter,
      fontFamily: "verdana",
      fontSize: "12px",
    },
    body: {
      margin: 0,
    },
  });

  return <Global styles={globalStyles} />;
};

export default GlobalStyles;
