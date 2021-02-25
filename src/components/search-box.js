import React from "react";
import Button from "./button";

function SearchBox() {
    return (
        <div>
            <form>
                <div className="max-w-sm mx-auto p-2 pr-0 flex items-center">
                    <input
                        type="text"
                        placeholder="what are you looking for?"
                        className="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none h-10"
                    />
                    <Button
                        text="Search"
                        type="submit"
                        className="appearance-none tracking-wide shadow"
                    ></Button>
                </div>
            </form>
        </div>
    );
}

export default SearchBox;
