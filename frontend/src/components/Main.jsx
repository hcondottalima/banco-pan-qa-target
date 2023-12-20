import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from './OfferCard';
import InteractionButtons from './InteractionButtons';
import Loading from './Loading';
import '../styles/App.css';

export default function Main(props) {

  const {
    errorMessage,
    isLoading,
    spaceData,
  } = props;

  return (
    <main className='main-container'>
      {errorMessage && <p className='token-error'>Ops! Algo deu errado :(<br/>{errorMessage}</p>}
      {isLoading ? <Loading /> : (
        <div className="activity">
          {spaceData.map((activity, index) =>
            <section key={index}>
              <h3>{activity.name}</h3>
              {activity.options.map((offer, idx) => 
                <div className="main-box" key={idx}>
                  <OfferCard offer={offer} />
                  {/* <pre className='pre'>
                      {JSON.stringify(offer.details, null, 2)}
                    </pre> */}
                  <InteractionButtons offer={offer} />
                </div>
              )}
            </section>
          )}
        </div >
      )}
    </main>
  );
}

Main.propTypes = {
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  spaceData: PropTypes.array,
}.isRequired;