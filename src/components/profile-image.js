import React from "react";
import profile from "../images/profile.png";

function ProfileImage() {
    return (
        <div className="inline-block ">
            <img
                alt="Profile image - Eliel Dabush"
                className="rounded-full w-48 mx-auto border-2 border-gray-600"
                src={profile}
            />
        </div>
    );
}
export default ProfileImage;
