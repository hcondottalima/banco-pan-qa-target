import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

export default function Header(props) {
  const {
    jwtToken,
    setJwtToken,
    selectedSpace,
    setSelectedSpace
  } = props;

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <header>
        <h1>QA de Spaces (LCGBR + Banco Pan)</h1>
        <button  type="button" onClick={() => setIsVisible(true)}>
          Informar Token
        </button>
        <select value={selectedSpace} onChange={(e) => setSelectedSpace(e.target.value)}>
          <option value="dashResumo">Dash Resumo</option>
          <option value="homeResumo">Home Resumo</option>
        </select>
        <h2>{selectedSpace}</h2>
      </header>

      {isVisible && (
        <main className='overlay'>
          <div className='modal'>
            <button className="close" type="button" onClick={() => setIsVisible(false)}>X</button>
            <textarea
              value={jwtToken}
              onChange={(event) => setJwtToken(event.target.value)}
            />
            <div>
              <button>Validar Token</button>
              <button disabled>Enviar Token</button>
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
