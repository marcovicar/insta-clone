import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  ChatBubbleOvalLeftIcon, FaceSmileIcon,
  HeartIcon,
  PaperAirplaneIcon
} from "@heroicons/react/24/outline";

const likes = [
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
];

function PostLikes() {
  return (
    <div className="flex items-center gap-2 text-sm text-black font-normal">
      {/* Avatar stack */}
      <div className="flex -space-x-2">
        {likes.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`user-${index}`}
            className="w-4 h-4 rounded-full ring-2 ring-white object-cover"
          />
        ))}
      </div>

      {/* Texto */}
      <span>
        Curtido por <span className="font-semibold">beans_af_</span> e{" "}
        <span className="font-semibold">outras pessoas</span>
      </span>
    </div>
  );
}


export default function Posts() {
  return (
    <div
      id={"posts-container"}
      className={"flex flex-col justify-center"}
    >
      <div className={"flex justify-between pb-4"}>
        <div className={"flex gap-2"}>
          <img
            src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
            alt={""}
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className={"flex items-center"}>
          <span className="flex gap-1.5 text-sm font-semibold leading-tight">
            {"marcovicar"}
            <span className={"text-gray-400"}>{"• 3 h"}</span>
          </span>
            {/*<p className="text-xs text-gray-400 truncate w-[170px]">*/}
            {/*  {""}*/}
            {/*</p>*/}
          </div>
        </div>
        <div className={"flex items-center cursor-pointer"}>
          <MoreHorizIcon fontSize="medium" />
        </div>
      </div>
      <div
        id={"image-post"}
        className={"flex justify-center"}
      >
        <img
          src={"https://images.unsplash.com/photo-1748968218568-a5eac621e65c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt={""}
          className={"w-full rounded "}
        />
      </div>
      <div>
        <div
          id={"posts-actions"}
          className={"flex gap-2 pt-4"}
        >
          <div className={"cursor-pointer hover:text-gray-300"}>
            <HeartIcon className="w-7 h-7" />
          </div>
          <div className={"cursor-pointer hover:text-gray-300"}>
            <ChatBubbleOvalLeftIcon  className={"w-7 h-7 scale-x-[-1]"}/>
          </div>
          <div className={"cursor-pointer hover:text-gray-300"}>
            <PaperAirplaneIcon className="w-7 h-7 rotate-[-53deg]" />
          </div>
        </div>
        <div className={"pt-2"}>
          <PostLikes />
        </div>
      </div>
      <div className={"flex pt-1.5 gap-1"}>
        <span
          className={"text-sm font-semibold leading-tight"}
        >
          marcovicar
        </span>
        <span
          className={"text-sm leading-tight"}
        >
          Em algum lugar por aí 🌴
        </span>
      </div>
      <div className={"flex flex-col gap-y-1.5 pt-1.5"}>
        <span className={"text-sm text-gray-400 leading-tight cursor-pointer"}>
          Ver 1 comentário
        </span>
        <div className={"flex justify-between cursor-pointer text-gray-400"}>
          <span className={"text-sm leading-tight cursor-pointer"}>
            Adicione um comentário...
          </span>
          <FaceSmileIcon className="w-4 h-4 hover:text-gray-300" />
        </div>
      </div>
      <hr className={"mt-4 h-[0.3px] bg-gray-300 border-none"}/>
    </div>
  );
}