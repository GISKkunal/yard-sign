import React, { useState } from "react";
import Boston from "../Components/Boston";

import SearchBox from "../Components/SearchBox";

export default function Home() {
  const [selectPositionPops, setSelectPosition] = useState(null);
  const [latLon, setLatLon] = useState("");
  const handlesetLat = (values) => {
    setLatLon(values);
  };
  return (
    <>
      <div
        style={{
          border: "2px solid grey",
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            border: "2px solid grey",
            height: "100vh",
            width: "80vw",
          }}
        >
          <Boston selectPositionPops={selectPositionPops} latLon={latLon} />
        </div>
        <div
          style={{
            border: "2px solid grey",
            height: "100vh",
            width: "20vw",
          }}
        >
          <SearchBox
            selectPositionPops={selectPositionPops}
            setSelectPosition={setSelectPosition}
            handlesetLat={(values) => handlesetLat(values)}
          />
        </div>
      </div>
    </>
  );
}
