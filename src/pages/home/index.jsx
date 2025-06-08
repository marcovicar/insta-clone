import React from 'react';
import MainSectionWrapper from "../../components/MainWrapper/MainWrapper.jsx";
import Feed from "../../components/Feed/Feed.jsx";

export default function Home() {

  return (
    <MainSectionWrapper
      customStyle={"overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 relative"}
    >
      <Feed />
    </MainSectionWrapper>
  )
}