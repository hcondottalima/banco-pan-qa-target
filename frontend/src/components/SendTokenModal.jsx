import React, { useState } from 'react';
import { fetchOffer } from '../utils/api';
import PropTypes from 'prop-types';
import '../styles/App.css';

export default function SendTokenModal(props) {
  const { setIsVisible, getSpaceContent } = props;

  const [jwtToken, setJwtToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValidToken, setIsValidToken] = useState(false);

  const getOffer = async () => {
    setIsLoading(true);
    const response = await fetchOffer(617533, jwtToken);
    if (response.status && response.status === 401) {
      console.log(response.status);
      setIsValidToken(false);
      console.error(response);
    } else {
      setIsValidToken(true);
    }
    setIsLoading(false);
  };

  const handleClose = () => {
    localStorage.setItem('token', jwtToken);
    setIsVisible(false);
    if(isValidToken) {
      getSpaceContent();
    }
  };

  const handleChange = (event) => {
    setIsValidToken(false);
    setJwtToken(event.target.value);
  };

  return (
    <main className='overlay'>
      <div className='modal'>
        <button className="close" type="button" onClick={handleClose}>X</button>
        <div className='text-area-container'>
          <textarea
            rows={16}
            cols={96}
            value={jwtToken}
            placeholder='Insira aqui seu Token JWT'
            onChange={handleChange}
          />
          <div className='text-area-buttons'>
            <button
              className='validate'
              onClick={getOffer}
              disabled={(jwtToken.split('.').length !== 3)}
            >
              {isLoading ? 'Validando...' : 'Validar Token'}
            </button>
            <button
              className='send'
              disabled={!isValidToken}
              onClick={handleClose}
            >
              Enviar Token
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

SendTokenModal.propTypes = {
  setIsVisible: PropTypes.func,
  getSpaceContent: PropTypes.func
}.isRequired;
