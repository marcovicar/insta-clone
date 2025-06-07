import React from 'react';
import MainSectionWrapper from "../../components/MainWrapper/MainWrapper.jsx";
import SuggestionsToFollow from "../../components/SuggestionsToFollow/SuggestionsToFollow.js";
import Posts from "../../components/Posts/Posts.jsx";

export default function Home() {

  return (
    <MainSectionWrapper
      customStyle={"overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 relative"}
    >
      <div className={"grid grid-cols-[1fr_300px] gap-4 px-4"}>
        <div
          id={"feed"}
          className={"flex flex-col px-16 gap-y-12"}
        >
          <Posts />
          <Posts />
          <Posts />
        </div>
        <SuggestionsToFollow />
      </div>
    </MainSectionWrapper>
  )
}