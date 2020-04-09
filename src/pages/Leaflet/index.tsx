import FramedLayout from "layouts/Framed"
import { Icon, Point } from "leaflet"
import { coloredSvg } from "plugins/colored-svg"
import React from "react"
import { Map, Marker, Popup } from "react-leaflet"
import GoogleLayer from "react-leaflet-google-layer"

const iconRed = new Icon({
  iconUrl: coloredSvg("device", "red"),
  iconRetinaUrl: coloredSvg("device", "red"),
  iconAnchor: new Point(12.5, 40),
  iconSize: new Point(25, 40),
})

const iconGreen = new Icon({
  iconUrl: coloredSvg("device", "green"),
  iconRetinaUrl: coloredSvg("device", "green"),
  iconAnchor: new Point(12.5, 40),
  iconSize: new Point(25, 40),
})

const Leaflet = () => {
  const state = {
    center: {
      lat: 47.4979,
      lng: 19.0402,
    },
    right: {
      lat: 47.4979,
      lng: 19.0499,
    },
    left: {
      lat: 47.4979,
      lng: 19.0311,
    },
    zoom: 13,
  }

  return (
    <FramedLayout title="Leaflet">
      <Map {...state} style={{ height: "100%", width: "100%" }}>
        <GoogleLayer googleMapsLoaderConf={{ KEY: "AIzaSyCvK8fhGJ3x-8cWG6yZi_6qF3L8d3Td0Go" }} type={"hybrid"} />
        <Marker position={state.center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={state.right}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker icon={iconGreen} position={state.right}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker icon={iconRed} position={state.left}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </FramedLayout>
  )
}

export default Leaflet
