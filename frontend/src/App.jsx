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
  const [spaceData, setSpaceData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSpaceContent = async () => {
    setIsLoading(true);
    const response = await fetchSpaceContent(selectedSpace);
    setSpaceData(response);
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
