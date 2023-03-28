import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";

enableMapSet();
const cardSlice = createSlice({
  name: "card",
  initialState: {
    cardData: [],
    bucketData: ["Education", "Entertainment", "Sports"],
    id: 0,
    freq: new Map(),
    historyData: [],
  },
  reducers: {
    addCard: (state, action) => {
      state.cardData.push(action.payload);
      state.id += 1;
      let bucket = action.payload.bucket;
      if (state.freq.get(bucket) === undefined) state.freq.set(bucket, 1);
      else state.freq.set(bucket, state.freq.get(bucket) + 1);
    },
    deleteCard: (state, action) => {
      let data = [];
      for (let i = 0; i < state.cardData.length; i++) {
        if (action.payload.id !== state.cardData[i].id) {
          data.push(state.cardData[i]);
        } else
          state.freq.set(
            state.cardData[i].bucket,
            state.freq.get(state.cardData[i].bucket) - 1
          );
      }

      state.cardData = data;
    },
    editCard: (state, action) => {
      for (let i = 0; i < state.cardData.length; i++) {
        if (action.payload.id === state.cardData[i].id) {
          state.cardData[i].name = action.payload.name;
          state.cardData[i].link = action.payload.link;
          break;
        }
      }
    },
    addBucket: (state, action) => {
      state.bucketData.push(action.payload.newBucket);
    },
    deleteAllCard: (state, action) => {
      let data = [];
      for (let i = 0; i < state.cardData.length; i++) {
        if (action.payload.bucket !== state.cardData[i].bucket) {
          data.push(state.cardData[i]);
        } else
          state.freq.set(
            state.cardData[i].bucket,
            state.freq.get(state.cardData[i].bucket) - 1
          );
      }

      state.cardData = data;
    },
    addToHistory: (state, action) => {
      if (
        state.historyData.length &&
        action.payload.id === state.historyData[0].id &&
        action.payload.name === state.historyData[0].name &&
        action.payload.link === state.historyData[0].link
      ) {
      } else {
        let data = [action.payload, ...state.historyData];
        state.historyData = data;
      }
    },

    updateBucketName: (state, action) => {
      let count = 0;
      for (let i = 0; i < state.cardData.length; i++) {
        if (state.cardData[i].bucket === state.bucketData[action.payload.id]) {
          count++;
          state.cardData[i].bucket = action.payload.newBucket;
        }
      }
      state.freq.set(state.bucketData[action.payload.id], 0);
      if (state.freq.get(action.payload.newBucket) === undefined)
        state.freq.set(action.payload.newBucket, count);
      else
        state.freq.set(
          action.payload.newBucket,
          state.freq.get(action.payload.newBucket) + count
        );
      state.bucketData[action.payload.id] = action.payload.newBucket;
    },
    updateCardBucket: (state, action) => {
      for (let i = 0; i < state.cardData.length; i++) {
        if (state.cardData[i].id === action.payload.id) {
          state.freq.set(
            state.cardData[i].bucket,
            state.freq.get(state.cardData[i].bucket) - 1
          );
          state.cardData[i].bucket = action.payload.newBucket;
          break;
        }
      }
      if (state.freq.get(action.payload.newBucket) === undefined)
        state.freq.set(action.payload.newBucket, 1);
      else
        state.freq.set(
          action.payload.newBucket,
          state.freq.get(action.payload.newBucket) + 1
        );
    },
  },
});

export const {
  addCard,
  deleteCard,
  editCard,
  addBucket,
  deleteAllCard,
  updateBucketName,
  updateCardBucket,
  addToHistory,
} = cardSlice.actions;

export default cardSlice.reducer;
