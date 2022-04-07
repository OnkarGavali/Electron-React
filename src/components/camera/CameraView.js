import { DefaultButton, Depths, PrimaryButton } from '@fluentui/react';
import React from 'react'
import Webcam from 'react-webcam';
import { CameraSelection } from './CameraSelection';
import { IconButton } from '@fluentui/react/lib/Button';

export const CameraView = ({imgSrc, setImgSrc}) => {
  const [device, setDevice] = React.useState(null);
  const [devices, setDevices] = React.useState([]);
  let noCamera = {data:null,text:"none",key:0}
  const handleDevices = React.useCallback(
    mediaDevices =>{
        console.log("hi in media device")
        console.log(mediaDevices)
        setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput").map((d,index)=> {return {data:d,text:d.label,key:index+1}}))},
      [setDevices]
  );
  React.useEffect(
    () => {
      console.log("hi in useEffect")
      navigator.mediaDevices.enumerateDevices().then(handleDevices);
      console.log(navigator.mediaDevices.enumerateDevices())
    },
    [handleDevices]
  );
  const videoConstraints = {
    width: 640,
    height: 480,
    //facingMode: "user"
    facingMode: "environment"
  };
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot({width: 640, height: 480});
      console.log(imageSrc)
      setImgSrc(imageSrc)
    },
    [webcamRef,device]
  );

  
    return (
    <>
        <div style={{padding:"1%",boxShadow: Depths.depth8 }}>
            {
                device ? (
                    <>  
                        {console.log(device,"A")}
                        
                        <Webcam audio={false} style={{width:"100%"}} ref={webcamRef} screenshotFormat="image/jpg" videoConstraints={{ ...videoConstraints,deviceId: device.data.deviceId }} />
                    </>
                ) : (
                    <>
                        <img style={{width:"100%"}} src="/assests/noVideoBackground.png"/>
                    </>
                )
            }
            
        </div>
        <div style={{marginTop:"2%",display:'flex', justifyContent:'space-between'}} >
          <div >
              <CameraSelection devices={devices} setDevice={setDevice} device={device}/>
          </div>
          
           <div style={{display:'flex', justifyContent:'flex-end',flexDirection:'column',alignItems:'flex-end'}}>
             
            {
             device ? (
               <>
                  <span >
                    <IconButton onClick={()=>{setDevice(null)}} iconProps={{ iconName : 'VideoOff' }} title="turn Off the video" ariaLabel="turn off video" />
                  </span>
                  <PrimaryButton text="Capture Image" onClick={capture}  />
                </>
             ) : (
                null
             )
           }
          
           </div>
          
        </div>
    </>
  )
}
