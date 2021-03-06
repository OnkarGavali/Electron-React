import React, { Fragment, useEffect, useState } from 'react';
import { get } from 'utils/requests';
import { Depths } from '@fluentui/react';


import { Counter } from 'components/counter/Counter';
import Titlebar from 'components/titlebar/Titlebar';

import logo from 'logo.svg';
import styles from 'components/App.module.scss';
import { WebcamC } from './webcam/Webcam';
import { Xyz } from './webcam/Xyz';
import { Col, Container, Row } from 'react-bootstrap';
import { CameraView } from './camera/CameraView';
import { Camera } from './camera/Camera';

function App() {
  const [inputBox, setInputBox] = useState("");

  useEffect(() => {

    /**
     * Example call to Flask
     * @see /src/utils/requests.js
     * @see /app.py
     */
    setTimeout(() => get(
      'example', // Route
      (response) => alert(response), // Response callback
      (error) => console.error(error) // Error callback
    ), 3000);
  }, []);

  return (
    <Fragment>

      <Titlebar />
      
     
      <div className={ styles.app }>
          <Camera/>
          {/* <WebcamC/> */}
        {/* <header className={ styles['app-header'] }>
           <Xyz styles={styles['webcam']}/>
         
          <img src={ logo } className={ styles['app-logo'] } alt="logo" />
          <Counter />
          <p>
            Edit
            {' '}
            <code>src/App.js</code>
            {' '}
            and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className={ styles['app-link'] }
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className={ styles['app-link'] }
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className={ styles['app-link'] }
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,
            <span> and </span>
            <a
              className={ styles['app-link'] }
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>

            hi aa
            <input type='text' onChange={e=>setInputBox(e.target.value)}/>
            <h1>{inputBox}</h1>
          </span>
        </header> */}
      </div>
    </Fragment>
  );
}

export default App;
