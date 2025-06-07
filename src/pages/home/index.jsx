import React from 'react';
import MainSectionWrapper from "../../components/MainWrapper/MainWrapper.jsx";
import SuggestionsToFollow from "../../components/SuggestionsToFollow/SuggestionsToFollow.js";
import Posts from "../../components/Posts/Posts.jsx";

export default function Home() {

  return (
    <MainSectionWrapper>
      <div className={"grid grid-cols-[1fr_300px] gap-4 px-4"}>
        <div
          id={"feed"}
          className={"px-16"}
        >
          <Posts />
        </div>
        <SuggestionsToFollow />
      </div>
    </MainSectionWrapper>
  )
}