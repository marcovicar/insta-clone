import React from 'react';

const suggestionsToFollowData = [
  {
    id: 0,
    isLoggedUser: true,
    user: {
      username: "marcovicar",
      avatar: {
        url: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: ""
      },
      description: "Marcos Victor Stark"
    },
    descriptionFollowedBy: ""
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
    descriptionFollowedBy: "Seguido(a) por criminososutil e outras 10 pessoas"
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
    descriptionFollowedBy: "Seguido(a) por kidbengala e outras 15 pessoas"
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
    descriptionFollowedBy: "Seguido(a) por ohitsle e outras 13 pessoas"
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
    descriptionFollowedBy: "Seguido(a) por vascusuf e outras 59 pessoas"
  },
];

const userLogged = [suggestionsToFollowData.find(item => item.isLoggedUser)] || [];
const suggestedUsers = suggestionsToFollowData.filter(item => !item.isLoggedUser) || [];

export default function SuggestionsToFollow() {
  return (
    <div className="w-full max-w-sm text-sm text-gray-800">
        {/* Perfil do usuário */}
      {suggestionsToFollowData && suggestionsToFollowData?.length > 0 && userLogged && userLogged?.map(user => (
        <div
          key={user?.id}
          className="flex items-center justify-between mb-4"
        >
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src={user?.user?.avatar?.url}
              alt={user?.user?.avatar?.alt || ""}
              className="h-11 w-11 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-sm leading-tight">{user?.user?.username}</p>
              <p className="text-gray-400 text-xs">{user?.user?.description}</p>
            </div>
          </div>
          <button className="text-xs font-semibold text-blue-500 hover:text-blue-600 cursor-pointer">
            Mudar
          </button>
        </div>
        ))
      }


      {/* Título */}
      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
        <p className="font-semibold text-[14px] text-[#737373]">Sugestões para você</p>
        <button className="text-black font-semibold hover:text-gray-400 cursor-pointer">Ver tudo</button>
      </div>

      {/* Lista de sugestões */}
      <ul className="space-y-3">
        {suggestedUsers && suggestedUsers?.length > 0 && suggestedUsers.map((user) => (
          <li key={user?.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer">
              <img
                src={user?.user?.avatar?.url}
                alt={user?.user?.username || ""}
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold leading-tight">
                  {user?.user?.username}
                </p>
                <p className="text-xs text-gray-400 truncate w-[170px]">
                  {user.descriptionFollowedBy}
                </p>
              </div>
            </div>
            <button className="text-xs font-semibold text-blue-500 hover:text-blue-600 cursor-pointer">
              Seguir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}