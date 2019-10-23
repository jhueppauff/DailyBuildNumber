import React from 'react';
import './App.css';
import GetBuildNumber from './components/BuildNumberService'
//@ts-ignore
import Loader from 'react-loader-spinner'

const App: React.FC<{}> = () => {
  const service = GetBuildNumber();

  return (
    <div>
      {service.status === 'loading' && 
      <div className="App">
        <header className="App-header">
          <p>Warming up the Server</p>
          <Loader type="CradleLoader" color="#00BFFF" height={100} width={100} timeout={3000} />
        </header>
      </div>}
      {service.status === 'loaded' && 
        <div className="App">
        <header className="App-header">
          <p>The Build Number for today is :</p>
          <b>{service.payload.Version}</b>
          </header>
        </div>
      }
      {service.status === 'error' && 
        <div className="App">
          <header className="App-header">
            <p>Oppps .. an Error occured, properly the backend moved to the dark side. :(</p>
          </header>
        </div>
      }
    </div>
  );
};



export default App;
