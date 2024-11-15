import React from "react";
import { ProfilePictureModel } from "../../models/ProfilePictureModel";

export const ProfilePicture: React.FC<ProfilePictureModel> = ({
  src,
  alt = "Profile Picture of User",
}) => (
  <div className="flex justify-center mb-4">
    <img
      src={src}
      alt={alt}
      className="w-16 h-16 rounded-full border-2 border-gray-300"
    />
  </div>
);
