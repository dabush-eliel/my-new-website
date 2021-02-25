import React from "react";
import { ColorContext } from "../context/color-context";
import profile from "../images/profile.png";
import "./profile-image.css";

function ProfileImage() {
    const color = React.useContext(ColorContext);
    return (
        <div className="inline-block ">
            <img
                alt="Profile image - Eliel Dabush"
                className={`profile-image rounded-full w-48 mx-auto border-2 border-${color}-200 opacity-90 hover:opacity-100`}
                src={profile}
            />
        </div>
    );
}
export default ProfileImage;
