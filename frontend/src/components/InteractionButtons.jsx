import React, { useState } from 'react';
import PropTypes from 'prop-types';
import JSONicon from '../assets/json-icon.png';
import LINKicon from '../assets/deep-link-icon.png';
import '../styles/App.css';


export default function ViewJsonButton(props) {
  const {details} = props.offer;

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className='icons-container'>
        <button className="icons" type="button" onClick={() => setIsVisible(true)}>
          <img src={JSONicon} alt="Visualizar JSON" />
        </button>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a href={details.content.payload.acao || details.content.payload.deeplink} target="_blank">
          <button className="icons"  type="button">
            <img src={LINKicon} alt="Acessar Deep Link" />
          </button>
        </a>
      </div>
      {isVisible && (
        <main className="overlay">
          <div className="modal">
            <button className="close" type="button" onClick={() => setIsVisible(false)}>X</button>
            <pre>
              {JSON.stringify(details, null, 2)}
            </pre>
          </div>
        </main>
      )}
    </>
  );
}

ViewJsonButton.propTypes = {
  offer: PropTypes.object,
}.isRequired;
