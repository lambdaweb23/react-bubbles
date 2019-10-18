import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    // fetch your colors data from the server when the component mounts
    axiosWithAuth()
      .get("/api/colors")
      .then(res => {
        // set that data to the colorList state property
        setColorList(res.data);
        console.log(setColorList)
      })
      .catch(err => console.error(err));
  }, [])
  

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
