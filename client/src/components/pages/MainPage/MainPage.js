import React from "react";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";

const MainPage = ({user}) => {
  return (
    <MainTemplate user={user}>
      <h1>Home</h1>
    </MainTemplate>
  )
};

export default MainPage;
