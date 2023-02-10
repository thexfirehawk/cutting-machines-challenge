import { useEffect, useState } from 'react';
import MachineCard from './MachineCard';


const MachineList = () => {
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const base64 = require('base-64');
      const headers = {'Authorization': 'Basic ' + base64.encode('lantekacademy::cPIi<kyF(=5OXc'),  'Accept': 'application/json'};
      fetch('https://app-academy-neu-codechallenge.azurewebsites.net/api/2d/cut', {headers})
      .then(async response => {
        const json = await response.json();
        setData(json);
      })
      .catch(error => {
        setError(error);
      })
    }, []);
    
    return (
      <section className='machines-list'>
        <h1>Cutting Machines</h1>
        <ul>
        {data && data.length > 1 && data.map((data, i) => {
          return <li key={i}><MachineCard props={data} id={i}/></li>})}
        </ul>
       {error && console.log(error)}
      </section>
    );
}

export default MachineList;