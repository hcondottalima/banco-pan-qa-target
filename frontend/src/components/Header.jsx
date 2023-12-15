import React, { useState } from 'react';
import { fetchOffer } from '../utils/api';
import PropTypes from 'prop-types';
import logoLCG from '../assets/lcgbr-white-logo.webp';
import logoPan from '../assets/pan-white-logo.png';
import '../styles/App.css';

export default function Header(props) {
  const {
    jwtToken,
    setJwtToken,
    selectedSpace,
    setSelectedSpace
  } = props;

  const [isVisible, setIsVisible] = useState(false);

  const getOffer = async () => {
    const response = await fetchOffer(617533);
    if (response.status && response.status === 401) {
      console.error(response);
    } else {
      console.log(response);
    }
  };

  return (
    <>
      <header>
        <div className="logos-container" >
          <img className="logos" src={logoLCG} />
          <img className="logos" src={logoPan} />
        </div>
        <div>
          <h1 className="app-title">Quality Assurance<br/><span className="app-subtitle">Spaces do Adobe Target</span></h1>
        </div>
        <div className='buttons'>
          <select value={selectedSpace} onChange={(e) => setSelectedSpace(e.target.value)}>
            <option value="dashResumo">Dash Resumo</option>
            <option value="homeResumo">Home Resumo</option>
          </select>
          <button  type="button" onClick={() => setIsVisible(true)}>
            Informar Token
          </button>
        </div>
      </header>

      {isVisible && (
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
                  Validar Token
                </button>
                <button disabled>Enviar Token</button>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

Header.propTypes = {
  jwtToken: PropTypes.string,
  setJwtToken: PropTypes.func,
  selectedSpace: PropTypes.string,
  setSelectedSpace: PropTypes.func,
}.isRequired;
