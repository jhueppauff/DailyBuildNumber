import { useEffect, useState } from 'react';
import { Service } from './Types/Service';
import { IBuildNumber } from './Types/BuildNumber';

export interface BuildNumber {
  results: IBuildNumber[];
}

const GetBuildNumber = () => {
  const [result, setResult] = useState<Service<IBuildNumber>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('https://dailybuild.azurewebsites.net/api/GetDailyBuildNumber')
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default GetBuildNumber;
