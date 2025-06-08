import React, {useState} from 'react';

export default function FeedPreferences() {
  const [isForYouFeed, setIsForYouFeed] = useState(true);
  return (
    <div className={"pb-6"}>
      <div className={"flex gap-3"}>
        <span
          className={`font-bold text-base cursor-pointer ${isForYouFeed ? '' : "text-gray-300"}`}
          onClick={() => setIsForYouFeed(true)}
        >
          Para você
        </span>
        <span
          className={`font-bold text-base cursor-pointer ${!isForYouFeed ? '' : "text-gray-300"}`}
          onClick={() => setIsForYouFeed(false)}
        >
          Seguindo
        </span>
      </div>

      <hr className={"mt-2 h-[0.3px] bg-gray-300 border-none"}/>
    </div>
  );
}