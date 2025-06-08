import React from 'react';
import FeedPreferences from "../FeedPreferences/FeedPreferences.jsx";
import StoriesCarousel from "../StoriesCarousel/StoriesCarousel.jsx";
import Posts from "../Posts/Posts.jsx";
import SuggestionsToFollow from "../SuggestionsToFollow/SuggestionsToFollow.jsx";

const postsData = [
  {
    id: 0,
    user: {
      username: "marcovicar",
      avatar: {
        url: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: ""
      }
    },
    postImage: {
      url: "https://images.unsplash.com/photo-1748968218568-a5eac621e65c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    description: "Em algum lugar por aí 🌴",
  },
  {
    id: 1,
    user: {
      username: "fabiokek",
      avatar: {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: ""
      }
    },
    postImage: {
      url: "https://images.unsplash.com/photo-1749367494428-baf0effb2cbf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    description: "vibes",
  },
  {
    id: 2,
    user: {
      username: "viniciuscoelho",
      avatar: {
        url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: ""
      }
    },
    postImage: {
      url: "https://images.unsplash.com/photo-1749137598868-94bde1951944?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    description: "Spending a great time",
  },
  {
    id: 3,
    user: {
      username: "super_earth",
      avatar: {
        url: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: ""
      }
    },
    postImage: {
      url: "https://images.unsplash.com/photo-1749254995381-802fcc8a2aab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    description: "Inner bloom",
  },
  {
    id: 4,
    user: {
      username: "im_not_a_bot",
      avatar: {
        url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: ""
      }
    },
    postImage: {
      url: "https://images.unsplash.com/photo-1582306792064-cf4184cfb6ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    description: "Yellow <3",
  },
];

export default function Feed() {
  return (
    <>
      <div className={"grid grid-cols-[1fr_300px] gap-8 pr-4"}>
        <div className={""}>
          <div className={""}>
            <FeedPreferences />
            <StoriesCarousel />
          </div>
          <div
            id={"feed"}
            className={"flex flex-col px-20 gap-y-8"}
          >
            {postsData && postsData?.length > 0 && postsData?.map((post, index) => (
              <Posts key={index} post={post} />
              )
            )}
          </div>
        </div>
        <div className={"p-4"}>
          <SuggestionsToFollow />
        </div>
      </div>
    </>
  );
}