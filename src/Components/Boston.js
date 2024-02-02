import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import StadiaMaps from "ol/source/StadiaMaps.js";
import TileWMS from "ol/source/TileWMS.js";
import Geolocation from "ol/Geolocation.js";
import "../CSS/popup.css";
// import { Icon, Style } from "ol/style.js";
// import Feature from "ol/Feature.js";
// import Point from "ol/geom/Point.js";
// import { Vector as VectorSource, Vector as VectorLayer } from "ol/source.js";
// import data from "../icons/icon.svg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { fromLonLat } from "ol/proj";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[500],
  "&:hover": {
    backgroundColor: grey[700],
  },
}));

const Boston = (props, ref) => {
  const { latLon } = props;
  const [map, setMap] = useState(null);
  const [geolocation, setGeolocation] = useState(null);
  const [popupContent, setPopupContent] = useState("");
  const [userIndus, setUserIndus] = useState("");
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [clickedCoordinates, setClickedCoordinates] = useState(null);
  const userIndusRef = useRef("");

  const parseHtml = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const rows = doc.querySelectorAll("table.featureInfo tr");

    const headers = Array.from(rows[0].querySelectorAll("th")).map((th) =>
      th.textContent.trim()
    );

    const dataRow = Array.from(rows[1].querySelectorAll("td")).map((td) =>
      td.textContent.trim()
    );

    const dataObject = headers.reduce((obj, header, index) => {
      obj[header] = dataRow[index];
      return obj;
    }, {});

    const attributes = [
      "USER_Organ",
      "USER_Websi",
      "USER_First",
      "USER_Last_",
      "USER_Email",
      "USER_Title",
      "USER_Addre",
      "USER_City",
      "USER_Count",
      "USER_State",
      "USER_Zip_C",
      "Country",
      "USER_Phone",
      "Revenue",
      "USER_Emplo",
      "USER_Sic_C",
      "USER_Indus",
    ];

    const filteredData = Object.entries(dataObject)
      .filter(([key]) => attributes.includes(key))
      .map(([key, value]) => `${key}: ${value}`)
      .join("<br/>");

    return filteredData;
  };

  useEffect(() => {
    const wmsLayer = new TileLayer({
      source: new TileWMS({
        url: "http://localhost:8080/geoserver/Practice_MA/wms",
        params: {
          LAYERS: "Practice_MA:Practice_MA",
          TILED: true,
          CQL_FILTER: userIndus ? userIndus : undefined,
        },
        serverType: "geoserver",
      }),
    });

    const newMap = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new StadiaMaps({
            layer: "alidade_smooth",
            retina: true,
            CQL_FILTER: "",
          }),
        }),
        wmsLayer,
      ],
      view: new View({
        center: fromLonLat([-71.0589, 42.3601]),
        zoom: 9,
      }),
    });

    const geolocationObj = new Geolocation({
      trackingOptions: {
        enableHighAccuracy: true,
      },
      projection: newMap.getView().getProjection(),
    });

    setGeolocation(geolocationObj);

    geolocationObj.setTracking(true);

    geolocationObj.on("change:position", () => {
      const coordinates = geolocationObj.getPosition();
      if (coordinates) {
        flyTo(coordinates, () => {});
      } else {
        console.error("Error getting current location");
      }
    });
    newMap.on("click", function (evt) {
      const viewResolution = newMap.getView().getResolution();
      const url = wmsLayer
        .getSource()
        .getFeatureInfoUrl(evt.coordinate, viewResolution, "EPSG:3857", {
          INFO_FORMAT: "text/html",
        });

      if (url) {
        fetch(url)
          .then((response) => response.text())
          .then((html) => {
            const parsedContent = parseHtml(html);
            setPopupContent(parsedContent);
            setIsPopupActive(true);

            const isPointFeature = html.includes("Point");

            if (isPointFeature) {
              setClickedCoordinates(evt.coordinate);
            }
          })
          .catch((error) => {
            console.error("Error fetching feature info:", error);
          });
      }
    });
    newMap.on("click", function () {
      setIsPopupActive(false);
    });
    newMap.on("pointermove", function (evt) {
      if (evt.dragging) {
        return;
      }
      const isWmsLayer = newMap.hasFeatureAtPixel(
        evt.pixel,
        (layer) => layer === wmsLayer
      );

      newMap.getTargetElement().style.cursor = isWmsLayer ? "pointer" : "";
    });

    setMap(newMap);
    return () => {
      newMap.setTarget("");
      geolocationObj.setTracking(false);
    };
  }, []);

  useEffect(() => {
    userIndusRef.current = userIndus;

    if (map) {
      const wmsLayer = map.getLayers().getArray()[1];
      wmsLayer
        .getSource()
        .updateParams({ CQL_FILTER: userIndusRef.current || undefined });
    }
  }, [userIndus]);
  const handleClick = (value) => {
    value !== "" ? setUserIndus(`USER_Indus='${value}'`) : setUserIndus("");
  };
  const flyTo = (location, done) => {
    const view = map?.getView();
    if (view) {
      const duration = 2000;
      const zoom = view.getZoom();

      view.animate(
        {
          center: location,
          duration: duration,
        },
        () => {
          view.animate(
            {
              zoom: zoom - 1,
              duration: duration / 2,
            },
            {
              zoom: zoom,
              duration: duration / 2,
            },
            done
          );
        }
      );
    }
  };

  const getCurrentLocation = () => {
    const coordinates = geolocation?.getPosition();
    if (coordinates) {
      flyTo(coordinates, () => {});
    } else {
      console.error("Error getting current location");
    }
  };
  const handleZoomIn = () => {
    map.getView().animate({
      zoom: map.getView().getZoom() + 1,
      duration: 200,
    });
  };

  const handleZoomOut = () => {
    map.getView().animate({
      zoom: map.getView().getZoom() - 1,
      duration: 200,
    });
  };

  useImperativeHandle(ref, () => ({
    handleZoomIn,
    handleZoomOut,
    getCurrentLocation,
    handleClick,
  }));

  useEffect(() => {
    if (latLon) {
      flyTo(fromLonLat(latLon), () => {});
    }
  }, [latLon]);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "100%" }} />

      {isPopupActive && (
        <div className={`popup-box ${isPopupActive ? "active" : ""}`}>
          <p dangerouslySetInnerHTML={{ __html: popupContent }} />
        </div>
      )}
    </>
  );
};
export default forwardRef(Boston);
