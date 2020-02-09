import React from "react";
import StarRatings from "react-star-ratings";

function SplitItems({ items, splitLevel }) {
  //inline-block w-full md:w-1/${splitLevel}
  return (
    <div className={`px-6 md:p-10 w-full`}>
      {items.map(item => (
        <div className="flex flex-row flex-wrap justify-between hover:bg-teal-400">
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
  const splitLevel = 2;
  const middleItem = items.length / splitLevel;
  const leftItems = items.filter((_, i) => i < middleItem);
  const rightItems = items.filter((_, i) => i >= middleItem);

  return (
    <div className={`list-items py-5`}>
      <div className="text-2xl font-bold text-gray-300 py-5">{title}</div>
      <div className="flex flex-col md:flex-row">
        <SplitItems items={leftItems} splitLevel={splitLevel} />
        <SplitItems items={rightItems} splitLevel={splitLevel} />
      </div>
    </div>
  );
}

export default ListLevels;
