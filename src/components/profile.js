import React from "react";
import LinksBar from "../components/links-bar";
import profile from "../images/profile.png";

function Profile() {
    return (
        <div className="flex flex-wrap flex-row items-center justify-between py-16">
            <div className="inline-block  items-center">
                {/* justify-end h-64 */}
                <div className="flex flex-col flex-wrap ">
                    <div className="py-1">
                        <div className="text-xs text-gray-500 font-bold">Name: </div>
                        <div>Eliel Dabush</div>
                    </div>
                    <div className="py-1">
                        <div className="text-xs text-gray-500 font-bold">Age: </div>
                        <div>27</div>
                    </div>
                    <div className="py-1">
                        <div className="text-xs text-gray-500 font-bold">Location: </div>
                        <div>Tel Aviv</div>
                    </div>
                </div>
            </div>
            <div className="inline-block ">
                <img
                    alt="Profile image - Eliel Dabush"
                    className="rounded-full w-48 mx-auto border-4 border-gray-700"
                    src={profile}
                />
            </div>
            <LinksBar className="" />
        </div>
    );
}

export default Profile;
