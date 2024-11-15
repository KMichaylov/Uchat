import React from "react";
import { ProfileOnSideBar } from "../../models/ProfileOnSidebarModel";

export const ProfileOnSidebar: React.FC<ProfileOnSideBar> = ({
  profilePicture,
  name,
  date,
  lastMessage,
  onClick,
}) => {
  return (
    <div
      className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 rounded-lg"
      onClick={onClick}
    >
      <img
        src={profilePicture}
        alt={`${name}'s profile`}
        className="w-12 h-12 rounded-full object-cover"
      />

      <div className="flex-1">
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-800">{name}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>

        <p className="text-sm text-gray-600 truncate">{lastMessage}</p>
      </div>
    </div>
  );
};
