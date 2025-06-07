import React from 'react';
import MainSectionWrapper from "../../components/MainWrapper/MainWrapper.jsx";
import SuggestionsToFollow from "../../components/SuggestionsToFollow/SuggestionsToFollow.jsx";
import Posts from "../../components/Posts/Posts.jsx";
import StoriesCarousel from "../../components/StoriesCarousel/StoriesCarousel.jsx";
import FeedPreferences from "../../components/FeedPreferences/FeedPreferences.jsx";

export default function Home() {

  return (
    <MainSectionWrapper
      customStyle={"overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 relative"}
    >
      <FeedPreferences />
      <StoriesCarousel />
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