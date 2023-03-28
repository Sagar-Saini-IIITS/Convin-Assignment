import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const DemoLinks = () => {
  return (
    <div className="px-5 py-3 my-5 bg-gray-200">
      <p className="font-[600] text-[18px] underline mb-2">
        Demo links for adding card:{" "}
      </p>
      <div className="flex flex-wrap justify-between">
        <span>
          C++ : https://www.youtube.com/embed/8jLOx1hD3_o
          <ContentCopyIcon
            color=""
            className="mx-2 p-[2px] cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(
                "https://www.youtube.com/embed/8jLOx1hD3_o"
              );
              document.getElementById("demo-1").innerHTML = "copied";
              setTimeout(
                () => (document.getElementById("demo-1").innerHTML = ""),
                3000
              );
            }}
          />{" "}
          <span id="demo-1"></span>
        </span>
        <span>
          SQL : https://www.youtube.com/embed/On9eSN3F8w0{" "}
          <ContentCopyIcon
            color=""
            className="mx-2 p-[2px] cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(
                "https://www.youtube.com/embed/On9eSN3F8w0"
              );
              document.getElementById("demo-2").innerHTML = "copied";
              setTimeout(
                () => (document.getElementById("demo-2").innerHTML = ""),
                3000
              );
            }}
          />{" "}
          <span id="demo-2"></span>
        </span>
        <span>
          Kapil Sharma Show: https://www.youtube.com/embed/mBseYad_sX4 
          <ContentCopyIcon
            color=""
            className="mx-2 p-[2px] cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(
                "https://www.youtube.com/embed/mBseYad_sX4"
              );
              document.getElementById("demo-3").innerHTML = "copied";
              setTimeout(
                () => (document.getElementById("demo-3").innerHTML = ""),
                3000
              );
            }}
          />{" "}
          <span id="demo-3"></span>
        </span>
        <span>Standup Comedy: https://www.youtube.com/embed/qkxuFKqJXWY
        <ContentCopyIcon
            color=""
            className="mx-2 p-[2px] cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(
                "https://www.youtube.com/embed/qkxuFKqJXWY"
              );
              document.getElementById("demo-4").innerHTML = "copied";
              setTimeout(
                () => (document.getElementById("demo-4").innerHTML = ""),
                3000
              );
            }}
          />{" "}
          <span id="demo-4"></span>
        </span>
        <span>
          Share Market basics: https://www.youtube.com/embed/Xn7KWR9EOGQ
          <ContentCopyIcon
            color=""
            className="mx-2 p-[2px] cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(
                "https://www.youtube.com/embed/Xn7KWR9EOGQ"
              );
              document.getElementById("demo-5").innerHTML = "copied";
              setTimeout(
                () => (document.getElementById("demo-5").innerHTML = ""),
                3000
              );
            }}
          />{" "}
          <span id="demo-5"></span>
        </span>
        <span>Yuvraj 6 sixes: https://www.youtube.com/embed/8b0ubLO2MUE
        <ContentCopyIcon
            color=""
            className="mx-2 p-[2px] cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(
                "https://www.youtube.com/embed/8b0ubLO2MUE"
              );
              document.getElementById("demo-6").innerHTML = "copied";
              setTimeout(
                () => (document.getElementById("demo-6").innerHTML = ""),
                3000
              );
            }}
          />{" "}
          <span id="demo-6"></span>
        </span>
        <span>
          MSD wicket-keeping: https://www.youtube.com/embed/46xL1CFUBYw
          <ContentCopyIcon
            color=""
            className="mx-2 p-[2px] cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(
                "https://www.youtube.com/embed/46xL1CFUBYw"
              );
              document.getElementById("demo-7").innerHTML = "copied";
              setTimeout(
                () => (document.getElementById("demo-7").innerHTML = ""),
                3000
              );
            }}
          />{" "}
          <span id="demo-7"></span>
        </span>
      </div>
    </div>
  );
};

export default DemoLinks;
