import React, { useRef, useState, useEffect } from "react"
import * as ol from "ol";
import MapContext from "./MapContext";
import {Map as olMap} from 'ol'
import {View as olView} from 'ol'


const BostonMap = ({ children, zoom, center }) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  // on component mount
  useEffect(() => {

    let options = {
      view: new olView({ zoom, center }),
      layers: [],
      controls: [],
      overlays: []
    };
    let mapObject = new olMap(options);
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);
    return () => mapObject.setTarget(undefined);
  }, []);
  // zoom change handler
  useEffect(() => {
    if (!map) return;
    map.getView().setZoom(zoom);
  }, [zoom]);
  // center change handler
  useEffect(() => {
    if (!map) return;
    map.getView().setCenter(center)
  }, [center])
  return (
    <MapContext.Provider value={{ map }}>
      <div ref={mapRef} className="ol-map">
        {children}
      </div>
    </MapContext.Provider>
  )
}
export default BostonMap;