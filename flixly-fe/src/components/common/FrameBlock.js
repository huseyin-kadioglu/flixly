import PhotoFrame from "../frame/PhotoFrame";
import "./FrameBlock.css";
import { useState } from "react";

const FrameBlock = ({ title, books }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const storedToken = sessionStorage.getItem("token");

  return (
    <div className="frame-block">
      <p>{title}</p>
      <hr></hr>
      <div className="gallery">
        {books?.map((book, index) => (
          <PhotoFrame key={index} book={book} showGhostMenu={storedToken} />
        ))}
      </div>
    </div>
  );
};
export default FrameBlock;
