import React, { useState, useEffect } from 'react';
import { fetchSpaceContent } from '../src/utils/api';
import OfferCard from './components/OfferCard';
import ViewJsonButton from './components/ViewJsonButton';
import Loading from './components/Loading';
import './styles/App.css';
import Header from './components/Header';

function App() {
  const [selectedSpace, setSelectedSpace] = useState('dashResumo');
  const [jwtToken, setJwtToken] = useState('');
  const [tokenError, setTokenError] = useState(false);
  const [spaceData, setSpaceData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSpaceContent = async () => {
    setTokenError(false);
    setIsLoading(true);
    const response = await fetchSpaceContent(selectedSpace);
    if (response.status && response.status === 401) {
      setTokenError(true);
      setSpaceData([]);
    } else {
      setSpaceData(response);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getSpaceContent();
  }, [selectedSpace]);

  return (
    <>
      <Header
        jwtToken={jwtToken}
        setJwtToken={setJwtToken}
        selectedSpace={selectedSpace}
        setSelectedSpace={setSelectedSpace}
      />
      {tokenError && <p className='token-error'>Ops! Algo deu errado :(<br/>Parece que o token fornecido é inválido ou expirou.</p>}
      {isLoading ? <Loading /> : (
        <main className="activity">
          {spaceData.map((activity, index) =>
            <section key={index}>
              <h3>{activity.name}</h3>
              {activity.options.map((offer, idx) => 
                <div key={idx}>
                  <OfferCard offer={offer} />
                  {/* <pre className='pre'>
                    {JSON.stringify(offer.details, null, 2)}
                  </pre> */}
                  <ViewJsonButton offer={offer} />
                </div>
              )}
            </section>
          )}
        </main >
      )}
    </>
  );
}

export default App;
