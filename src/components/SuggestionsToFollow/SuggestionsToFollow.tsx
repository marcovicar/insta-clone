import React from 'react';

const suggestions = [
  {
    username: "fabiokek",
    description: "Seguido(a) por criminososutil...",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    username: "viniciuscoelho",
    description: "Seguido(a) por kidbengala...",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    username: "franciscojtimoteo",
    description: "Seguido(a) por ohitsle e outra 9...",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    username: "iamgoncaloo",
    description: "Seguido(a) por vascusuf e outra...",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    username: "ruipedro777",
    description: "Seguido(a) por axelsa951 e outro...",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function SuggestionsToFollow() {
  return (
    <div className="w-full max-w-sm text-sm text-gray-800">
        {/* Perfil do usuário */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="marcovicar"
            className="h-11 w-11 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm leading-tight">marcovicar</p>
            <p className="text-gray-400 text-xs">Marcos Victor Stark</p>
          </div>
        </div>
        <button className="text-xs font-semibold text-blue-500 hover:text-blue-600 cursor-pointer">
          Mudar
        </button>
      </div>

      {/* Título */}
      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
        <p className="font-semibold text-[14px]">Sugestões para você</p>
        <button className="text-gray-600 hover:underline cursor-pointer">Ver tudo</button>
      </div>

      {/* Lista de sugestões */}
      <ul className="space-y-3">
        {suggestions.map((user) => (
          <li key={user.username} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.username}
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold leading-tight">
                  {user.username}
                </p>
                <p className="text-xs text-gray-400 truncate w-[170px]">
                  {user.description}
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