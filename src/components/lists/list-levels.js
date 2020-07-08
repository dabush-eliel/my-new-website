import React from "react";
import StarRatings from "react-star-ratings";

function RatingList({ items }) {
    return (
        <div className="px-6 md:p-10 w-full">
            {items.map(item => (
                <div className="flex flex-row flex-wrap justify-between hover:bg-teal-200">
                    <div className="inline-block">{item.name}</div>
                    <div className="inline-block">
                        <StarRatings
                            name={item.name}
                            numberOfStars={5}
                            rating={item.level}
                            starDimension="16px"
                            starRatedColor="#d69e2e"
                            starSpacing="3px"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

function ListLevels({ items, title }) {
    const middleItem = items.length / 2;
    const leftItems = items.filter((_, i) => i < middleItem);
    const rightItems = items.filter((_, i) => i >= middleItem);

    return (
        <div className="list-items py-5">
            <div className="text-2xl font-bold py-5">{title}</div>
            <div className="flex flex-col md:flex-row">
                <RatingList items={leftItems} />
                <RatingList items={rightItems} />
            </div>
        </div>
    );
}

export default ListLevels;
