import React, { useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { addCard} from "./cardSlice";
import validator from 'validator'
const AddCard = () => {
 const bucketData = useSelector((store) => store.card.bucketData);
  const id = useSelector((store) => store.card.id);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [bucketId, setBucketId] = useState(0);
  const [error,setError]=useState(0);
  return (
    <div className=" my-1 bg-blue-100 p-5">
      <div className="mb-2 flex gap-16">
        <div>
          <label>Name:</label>
          <input
            value={name}
            className="border-2 p-1 px-2 border-gray-500 mx-2"
            placeholder="enter valid card name"
            onChange={(e) => {setError(0); setName(e.target.value)}}
          />
        </div>
        <div>
          <label>Link:</label>
          <input
            value={link}
            className="border-2 p-1 px-2 border-gray-500 mx-2 "
            placeholder="enter valid card link"
            onChange={(e) =>{setError(0); setLink(e.target.value)}}
          />
        </div>
        <div>
          <label htmlFor="bucket">Bucket:</label>
          <select
            className="p-[6px] mx-2 border border-black"
            name="bucket"
            id="bucket"
            value={bucketId}
            onChange={(e) => setBucketId(e.target.value)}
          >
            {bucketData.map((bucket, index) => (
              <option value={index} key={index}>
                {bucket}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            className="p-1 px-2 mx-2 border-2 font-[500] rounded-sm text-white bg-orange-500 border-gray-500"
            onClick={() => {
              if (validator.isURL(link,{ ignore_whitespace: true }) && !validator.isEmpty(name ,{ ignore_whitespace: true })) {
                setError(0);
                dispatch(
                  addCard({ id, name, link, bucket: bucketData[bucketId] })
                );
                setName("");
                setLink("");;
              } 
              else setError(1);
             
            }}
          >
            Add a new Card
          </button>
        </div>
      </div>
      {error==1 && <div className="text-center p-2"><span className="font-[500] text-red-500">Please enter valid name and link.</span></div> }
    </div>
  );
};

export default AddCard;
