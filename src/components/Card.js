import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  deleteCard,
  editCard,
  updateCardBucket,
  addToHistory,
} from "./cardSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import validator from 'validator'

const Card = ({ card, bucketId }) => {
  const bucketData = useSelector((store) => store.card.bucketData);
  const dispatch = useDispatch();
  const [editName, setEditName] = useState(card.name);
  const [editLink, setEditLink] = useState(card.link);
  const [editError, setEditError] = useState(0); 
  let newBucketId = bucketId;
  return (
    <div className="w-64 bg-white border m-5 p-2 overflow-hidden rounded-sm ">
      <div className="flex justify-between">
        <span className="w-[80%]">Name: {card.name} </span>
        <div className="flex">
          <span>
            <EditIcon
              onClick={() => {
                document.getElementById(`id-${card.id}`).style.display =
                  "block";
              }}
            />
          </span>
          <span
            className="ml-2 border-gray-500 font-[400] cursor-pointer"
            onClick={() => {
              dispatch(deleteCard({ id: card.id }));
            }}
          >
            <DeleteIcon />
          </span>{" "}
        </div>
      </div>
      <p className="my-1 overflow-hidden break-words ">
        Link:{" "}
        <span
          className="cursor-pointer text-blue-400"
          onClick={() => {
            document.getElementById("id01").style.display = "block";
            let video = document.getElementById("id01if");
            video.src = `${card.link}?autoplay=1`;
            dispatch(
              addToHistory({ id: card.id, name: card.name, link: card.link })
            );
          }}
        >
          {card.link}
        </span>{" "}
      </p>

      <p className="my-2">
        Bucket:{" "}
        <span>
          <select
            className="border border-black p-[2px] cursor-pointer"
            name="bucket"
            id="bucket"
            value={newBucketId}
            onChange={(e) => {
              newBucketId = e.target.value;
              dispatch(
                updateCardBucket({
                  id: card.id,
                  newBucket: bucketData[newBucketId],
                })
              );
            }}
          >
            {bucketData.map((b, index) => (
              <option value={index} key={b + index}>
                {b}
              </option>
            ))}
          </select>{" "}
        </span>{" "}
      </p>
      <div id="id01" className="w3-modal">
        <div className="w3-modal-content">
          <div className="w3-container">
            <span
              onClick={() => {
                document.getElementById("id01").style.display = "none";
                let video = document.getElementById("id01if");
                video.src = "";
              }}
              className="w3-button w3-display-topright"
            >
              &times;
            </span>
           
            <iframe
              height="500px"
              width="840px"
              allow="autoplay"
              id="id01if"
              src=""
            />
          </div>
        </div>
      </div>
      <div id={`id-${card.id}`} className="w3-modal">
        <div className="w3-modal-content">
          <div className="w3-container">
            <span
              onClick={() => {
                document.getElementById(`id-${card.id}`).style.display = "none";
              }}
              className="w3-button w3-display-topright"
            >
              &times;{" "}
            </span>
            <div className="w-[100%] p-3">
              <p>
                {" "}
                Name:{" "}
                <input
                  className="border-2 block border-gray-500 m-1 p-1"
                  value={editName}
                  onChange={(e) => {
                    setEditName(e.target.value);
                  }}
                />{" "}
              </p>
              <p>
                Link:{" "}
                <input
                  className="border-2 block border-gray-500 m-1 p-1"
                  value={editLink}
                  onChange={(e) => {
                    setEditLink(e.target.value);
                  }}
                />{" "}
              </p>
              {editError===1 &&<p className="font-[500] text-red-500">Please enter valid name and link.</p>}
              <button
                className="px-2 p-1 my-3 mx-1 border-2 border-black font-[500] bg-orange-500 text-white"
                onClick={() => {
                  if (validator.isURL(editLink,{ ignore_whitespace: true }) && !validator.isEmpty(editName ,{ ignore_whitespace: true })) { setEditError(0);
                  dispatch(
                    editCard({ id: card.id, name: editName, link: editLink })
                  ); 
                  document.getElementById(`id-${card.id}`).style.display =
                    "none"; }
                  else setEditError(1);
                }
                  }
              >
                Update
              </button>
              
              </div>
      
    </div>
         
        </div>
      </div>
    </div>
  );
};

export default Card;
