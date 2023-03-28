import React from "react";
import BucketLists from "./BucketLists";
import { useSelector } from "react-redux";
const Body = () => {
  const cardData = useSelector((store) => store.card.cardData);
  const bucketData = useSelector((store) => store.card.bucketData);
  const freq = useSelector((store) => store.card.freq);
  return (
    <div className=" bg-gray-200 my-5">
      <div className="p-5 text-[20px] font-[500] bg-blue-100">
        Bucket-wise cards
      </div>
      {cardData.length === 0 && (
        <p className="p-5">No card is added, Please add card.</p>
      )}
      {bucketData.map((bucket, index) =>
        freq.get(bucket) > 0 ? (
          <BucketLists key={bucket + index} bucketId={index} />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Body;
