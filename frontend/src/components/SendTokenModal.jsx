import React, { useState } from 'react';
import { fetchOffer } from '../utils/api';
import PropTypes from 'prop-types';
import '../styles/App.css';

export default function SendTokenModal(props) {
  const { setIsVisible } = props;

  const [jwtToken, setJwtToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const getOffer = async () => {
    setIsLoading(true);
    const response = await fetchOffer(617533);
    if (response.status && response.status === 401) {
      console.error(response);
    } else {
      console.log(response);
    }
    setIsLoading(false);
  };

  return (
    <main className='overlay'>
      <div className='modal'>
        <button className="close" type="button" onClick={() => setIsVisible(false)}>X</button>
        <div className='text-area-container'>
          <textarea
            rows={16}
            cols={96}
            value={jwtToken}
            placeholder='Insira aqui seu Token JWT'
            onChange={(event) => setJwtToken(event.target.value)}
          />
          <div className='text-area-buttons'>
            <button
              onClick={getOffer}
              disabled={(jwtToken.split('.').length !== 3)}
            >
              {isLoading ? 'Validando...' : 'Validar Token'}
            </button>
            <button disabled>Enviar Token</button>
          </div>
        </div>
      </div>
    </main>
  );
}

SendTokenModal.propTypes = {
  setIsVisible: PropTypes.func,
}.isRequired;
