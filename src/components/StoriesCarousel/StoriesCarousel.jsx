import React from 'react';
import {shortText} from "../../helpers/globals/index.js";

function Stories() {
  return (
    <div className={"flex flex-col gap-1"}>
      <div className="cursor-pointer bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] rounded-full">
        <div className="bg-white p-[2px] rounded-full">
          <img
            src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
            alt={""}
            className="h-14 w-14 rounded-full object-cover"
          />
        </div>
      </div>
      <span className={"text-[12px] leading-tight"}>
        {shortText("marcovicar", 9)}
      </span>
    </div>
  )
}

export default function StoriesCarousel() {
  return (
    <div className={"flex gap-4 pb-8"}>
      <Stories />
      <Stories />
      <Stories />
      <Stories />
      <Stories />
      <Stories />
      <Stories />
      <Stories />
    </div>
  );
}