import React from 'react';
import MainSectionWrapper from "../../components/MainWrapper/MainWrapper.jsx";
import SuggestionsToFollow from "../../components/SuggestionsToFollow/SuggestionsToFollow.js";

export default function Home() {

  return (
    <MainSectionWrapper>
      <div className={"grid grid-cols-[1fr_300px] gap-4 px-4"}>
        <div
          id={"feed"}
          className={""}
        >
          Feed
        </div>
        <SuggestionsToFollow />
      </div>
    </MainSectionWrapper>
  )
}