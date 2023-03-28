import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCard, updateBucketName } from "./cardSlice";
import Card from "./Card";

const BucketLists = ({ bucketId }) => {
  const cardData = useSelector((store) => store.card.cardData);
  const bucketData = useSelector((store) => store.card.bucketData);
  const dispatch = useDispatch();
  const [editStatus, setEditStatus] = useState(false);
  const [bucket, setBucket] = useState(bucketData[bucketId]);
  const [newBucket, setNewBucket] = useState(bucketData[bucketId]);
  function updateBucket() {
    dispatch(updateBucketName({ id: bucketId, newBucket }));
    setEditStatus(false);
    setBucket(newBucket);
  }
  return (
    <>
      <div className="text-[18px] px-5 py-3 bg-sky-200 my-1">
        {editStatus && (
          <div>
            <input
              value={newBucket}
              onChange={(e) => {
                setNewBucket(e.target.value);
              }}
            />
            <span
              className="m-1 mx-5 p-1 cursor-pointer border text-[14px] bg-orange-400 text-white border-orange-500"
              onClick={() => {
                updateBucket();
              }}
            >
              Update bucket name
            </span>
          </div>
        )}
        {!editStatus && (
          <div className="flex flex-wrap justify-between">
            <div>
              <span className="mr-10">{bucket}</span>
              <span
                className="m-1 mx-5 p-1 cursor-pointer border text-[14px] bg-orange-400 text-white border-orange-500"
                onClick={() => {
                  setEditStatus(!editStatus);
                }}
              >
                Edit bucket name
              </span>
            </div>
            <div>
              <span
                className="m-1 mx-10 p-1 cursor-pointer border text-[14px] bg-orange-400 text-white border-orange-500"
                onClick={() => {
                  dispatch(deleteAllCard({ bucket }));
                }}
              >
                Delete all cards
              </span>{" "}
            </div>{" "}
          </div>
        )}
      </div>

      <div className="p-2 flex flex-wrap">
        {cardData.map((card) =>
          bucket === card.bucket ? (
            <Card card={card} key={bucket + card.id} bucketId={bucketId} />
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
};

export default BucketLists;
