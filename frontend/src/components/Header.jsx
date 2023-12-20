import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SendTokenModal from './SendTokenModal';
import logoLCG from '../assets/lcgbr-white-logo.webp';
import logoPan from '../assets/pan-white-logo.png';
import '../styles/App.css';

export default function Header(props) {
  const {
    selectedSpace,
    setSelectedSpace
  } = props;

  const [isVisible, setIsVisible] = useState(false);

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

      {isVisible && <SendTokenModal setIsVisible={setIsVisible} />}
    </>
  );
}

Header.propTypes = {
  selectedSpace: PropTypes.string,
  setSelectedSpace: PropTypes.func,
}.isRequired;
