import React, { useState } from "react";
import MainTabs from "./nav/tabs/MainTabs";
import Page from "./pages/Page";

const Main = () => {
  return (
    <div>
      {/* <MainNav /> */}
      <MainTabs />
      <Page />
    </div>
  );
};

export default Main;
