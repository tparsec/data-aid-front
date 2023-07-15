const styles = {
  tab: (theme) => ({
    display: "inline-block",
    padding: "2px",
    backgroundColor: theme.color.darkest,
    borderRadius: "3px 3px 0 0",
  }),
};

const Tab = ({ title }) => {
  return <div css={styles.tab}>{title}</div>;
};

export default Tab;
