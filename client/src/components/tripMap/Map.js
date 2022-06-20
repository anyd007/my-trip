import React, { useEffect, useRef, useState } from 'react';
import H from "@here/maps-api-for-javascript";
import onResize from 'simple-element-resize-detector';
import { Bubbles } from "../loadnig/Loadnig"


// export default class Map extends React.Component {
//   constructor(props) {
//     super(props);
    // // the reference to the container
    // this.ref = React.createRef();
    // // reference to the map
    // this.map = null;
//   }

//   componentDidMount() {
//     if (!this.map) {
//       // instantiate a platform, default layers and a map as usual
//       const platform = new H.service.Platform({
//         apikey: 'tYt5LkbB7b1jaTRczNqD5QNUO6AiK3cGGgpoefpTZCM'
//       });
//       const layers = platform.createDefaultLayers();
//       const map = new H.Map(
//         this.ref.current,
//         layers.vector.normal.map,
//         {
//           pixelRatio: window.devicePixelRatio,
//           center: {lat: 0, lng: 0},
//           zoom: 2,
//         },
//       );
//       onResize(this.ref.current, () => {
//         map.getViewPort().resize();
//       });
//       this.map = map;
//     }
//   }
const Map = (props) =>{
   const ref = useRef()
    const [maper, setMap]=useState(null)
   
    const [loading, setLoading]=useState(true)
 useEffect(()=>{
    if (!maper) {
              // instantiate a platform, default layers and a map as usual
              const platform = new H.service.Platform({
                apikey: 'tYt5LkbB7b1jaTRczNqD5QNUO6AiK3cGGgpoefpTZCM'
              });
              const layers = platform.createDefaultLayers();
              const map = new H.Map(
                ref.current,
                layers.vector.normal.map,
                {
                  pixelRatio: window.devicePixelRatio,
                  center: {lat: 0, lng: 0},
                  zoom: 4,
                },
              );
              onResize(ref.current, () => {
                map.getViewPort().resize();
              });
              setMap(map);
             setLoading(false)
            }
 },[])
    return (
    <>
      <div
      style={{ position: 'relative', width: '100vw', height:'80vh' }}
      ref={ref}
      />
      {loading && <Bubbles />}
    </>
    )
  
}
export default Map

