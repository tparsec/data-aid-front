import Tab from "./Tab";

const styles = {
  wrapper: (theme) => ({
    backgroundColor: theme.color.dark,
    padding: "2px 0 0 0",
  }),
};

const MainTabs = ({ tabs = ["New project"] }) => {
  return (
    <div css={styles.wrapper}>
      {tabs?.map((tab) => (
        <Tab key={tab} title={tab} />
      ))}
    </div>
  );
};

export default MainTabs;
