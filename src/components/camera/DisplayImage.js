import { Depths, PrimaryButton } from '@fluentui/react'
import React from 'react'
import { Col } from 'react-bootstrap'

export const DisplayImage = ({imgSrc}) => {
  return (
    <>
        <div style={{padding:"1%",boxShadow: Depths.depth8}}>
            <div>
                <img style={{width:'100%'}} src={imgSrc}></img>
            </div>
            <div style={{margin:"1%",display:'flex',justifyContent:"space-between",}}>
                <PrimaryButton text="Capture Image" />
                <PrimaryButton text="Capture Image"  />
            </div>
            <div style={{height:"100%",backgroundColor:'red'}}>

            </div>
        </div>
        
    </>
  )
}
