import React from 'react'
import Webcam from "react-webcam";

import { Image, IImageProps } from '@fluentui/react/lib/Image';


const imageProps = {
    src: 'http://via.placeholder.com/350x150',
    // Show a border around the image (just for demonstration purposes)
    styles: props => ({ root: { border: '10px solid ' + props.theme.palette.neutralSecondary } }),
};
export const WebcamC = () => {
  const [deviceId, setDeviceId] = React.useState({});
  const [devices, setDevices] = React.useState([]);

  const handleDevices = React.useCallback(
    
    mediaDevices =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  React.useEffect(
    () => {
      navigator.mediaDevices.enumerateDevices().then(handleDevices);
      console.log(navigator.mediaDevices.enumerateDevices())
    },
    [handleDevices]
  );

  
  return (
    <>
      {console.log(devices)}
      {devices.map((device, key) => (
          <div>
            {/* <Webcam audio={false} videoConstraints={{ deviceId: device.deviceId }} /> */}
            {device.label || `Device ${key + 1}`}
                  <Image
            {...imageProps}
            alt="Example with no image fit value and height or width is specified."
            width={100}
            height={100}
          />
          </div>
        ))}
        <div className="ms-Grid" >
  <div className="ms-Grid-row">
    <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
      <div className="LayoutPage-demoBlock" style={{backgroundColor:"blue"}}>A</div>
    </div>
    <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10">
      <div className="LayoutPage-demoBlock" style={{backgroundColor:"red"}}>B</div>
    </div>
  </div>
</div>
<div class="ms-Grid" dir="ltr">
  <div class="ms-Grid-row">
    <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg2" style={{backgroundColor:"blue"}}>A</div>
    <div class="ms-Grid-col ms-sm6 ms-md8 ms-lg10" style={{backgroundColor:"pink"}}>B</div>
  </div>
</div>
    </>
  );
}
