import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';


export default function ViewJsonButton(props) {
  const {details} = props.offer;

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsVisible(true)}>
        Visualizar Json
      </button>
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
