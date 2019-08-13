import React from 'react';
import './App.css';
import GetBuildNumber from './components/BuildNumberService'

const App: React.FC<{}> = () => {
  const service = GetBuildNumber();

  return (
    <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' && (
        <div>
          <p>The Build Number for today is :</p>
          <p><b>{service.payload.Version}</b></p>      
        </div>
      )}
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </div>
  );
};



export default App;
