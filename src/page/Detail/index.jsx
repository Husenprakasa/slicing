import React from "react";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/detail")}>Home</button>
    </div>
  );
};

export default Detail;
