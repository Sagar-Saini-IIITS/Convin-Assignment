import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBucket } from "./cardSlice";
import validator from 'validator'
function AddBucket() {
  const [newBucket, setNewBucket] = useState("");
  const [bucketError,setBucketError]=useState(0);
  const dispatch = useDispatch();
  return (
    <div className="my-1 bg-blue-100 p-5">
      <label className="mr-2">Bucket:</label>
      <input
        className="border-2 p-1 border-gray-600"
        placeholder="Enter bucket name"
        value={newBucket}
        onChange={(e) => setNewBucket(e.target.value)}
      />
      <button
        className="p-1 px-2 mx-3 border-2 font-[500] rounded-sm text-white bg-orange-500 border-gray-500"
        onClick={() => {
          if(!validator.isEmpty(newBucket ,{ ignore_whitespace: true })){
            setBucketError(0);
          dispatch(addBucket({ newBucket }));
          setNewBucket(""); }
          else setBucketError(1);
        }}
        
      >
        Add a new Bucket
      </button>
      {bucketError==1 && <div className="text-center p-2"><span className="font-[500] text-red-500">Please enter valid bucket name..</span></div> }
    </div>
  );
}

export default AddBucket;
