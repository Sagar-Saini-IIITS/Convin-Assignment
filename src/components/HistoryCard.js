import React from "react";
import { useSelector } from "react-redux";

const HistoryCard = () => {
  const historyData = useSelector((store) => store.card.historyData);
  return (
    <div className="my-5 ">
      <p className="bg-blue-100 p-5 text-[20px] font-[500]">Watch History</p>
      <div className="flex flex-wrap bg-gray-200 p-5">
        {historyData.length === 0 && <p>No watch history.</p>}
        {historyData.map((card,index) => (
          <div key={index} className="w-56 p-2 m-5 border bg-white rounded-sm">
            <p>Name: {card.name}</p>
            <p className="break-words">Link: {card.link}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryCard;
