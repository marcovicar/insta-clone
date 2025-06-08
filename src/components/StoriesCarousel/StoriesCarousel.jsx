import React from 'react';
import {shortText} from "../../helpers/globals/index.js";

const storiesData = [
  {
    id: 0,
    user: {
      username: "marcovicar",
      avatar: {
        url: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: ""
      }
    },
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
  },
];

function Stories({
  stories,
}) {
  return (
    <div className={"flex flex-col gap-1"}>
      <div className="cursor-pointer bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] rounded-full">
        <div className="bg-white p-[2px] rounded-full">
          <img
            src={stories?.user?.avatar.url}
            alt={stories?.user?.avatar.url || ""}
            className="h-14 w-14 rounded-full object-cover"
          />
        </div>
      </div>
      <span className={"text-[12px] leading-tight"}>
        {shortText(stories?.user?.username, 9)}
      </span>
    </div>
  )
}

export default function StoriesCarousel() {
  return (
    <div className={"flex gap-4 pb-8"}>
      {storiesData && storiesData?.length > 0 && storiesData.map((item, index) => (
        <Stories key={index} stories={item} />
      ))}
    </div>
  );
}