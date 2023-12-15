import React, { useState, useEffect } from 'react';
import { fetchSpaceContent } from '../src/utils/api';
import OfferCard from './components/OfferCard';
import ViewJsonButton from './components/ViewJsonButton';
import Loading from './components/Loading';
import Header from './components/Header';
// import GlobalStyles from './styles/GlobalStyles';
import './styles/App.css';

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
      {/* <GlobalStyles /> */}
      <Header
        jwtToken={jwtToken}
        setJwtToken={setJwtToken}
        selectedSpace={selectedSpace}
        setSelectedSpace={setSelectedSpace}
      />
      <main className='main-container'>
        {tokenError && <p className='token-error'>Ops! Algo deu errado :(<br/>Parece que o token fornecido é inválido ou expirou.</p>}
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
                    <ViewJsonButton offer={offer} />
                  </div>
                )}
              </section>
            )}
          </div >
        )}
      </main>
    </>
  );
}

export default App;
