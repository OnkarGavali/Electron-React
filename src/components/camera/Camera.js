import { Depths } from '@fluentui/react'
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CameraView } from './CameraView'
import { DisplayImage } from './DisplayImage'
import { TextField } from '@fluentui/react/lib/TextField';
import { get } from 'utils/requests'

export const Camera = () => {
    const [imgSrc, setImgSrc] = React.useState(null);

    useEffect(() => {
      setTimeout(() => get(
        'getHue', // Route
        (response) => alert(response), // Response callback
        (error) => console.error(error) // Error callback
      ), 3000);
    }, [imgSrc]);
    return (
    <Container style={{marginTop:'5%', boxShadow: Depths.depth4}}>
       
          {/* <Row>
            <Col sm={12} lg={2} xl={12} style={{backgroundColor:"blue"}}>1 of 3</Col>
            <Col sm={12} lg={6} style={{backgroundColor:"red"}}>2 of 3 (wider)</Col>
            <Col sm={12}  lg={3} style={{backgroundColor:"pink"}}>3 of 3</Col>
          </Row> */}
          {/* <Row >
            <Col>1 of 3</Col>
            <Col xs={5}>2 of 3 (wider)</Col>
            <Col>3 of 3</Col>
          </Row> */}
           <Row style={{  padding:'2%' }} >
             
            <Col  sm={12} lg={7}>
              <CameraView imgSrc={imgSrc} setImgSrc={setImgSrc}/>
            </Col>
            <Col sm={12} lg={5}>
                {
                    imgSrc===null ? (
                        <>
                          <div>
                            <TextField label="Standard" /> 
                            <TextField label="weight" inline />  

                            <TextField label="Standard:" underlined />
                            <TextField label="Weight:" underlined />
                          </div>                        
                        </>
                    ) : (
                        <>
                            <DisplayImage imgSrc={imgSrc}/>
                        </>
                    )
                }
            </Col>
          </Row>
        </Container>
  )
}
