import './App.css';
//import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import { useState, useEffect } from "react";
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    function fetchData() {
      const getMyNfts = async () => {
        const openseaData = await axios.get(
          'https://testnets-api.opensea.io/assets?asset_contract_address=0x2Df4bd0AA6c92747D94e535669FeCf81D949EED1&order_direction=asc'
        )
        //console.log(openseaData.data.assets)
        setPunkListData(openseaData.data.assets)
      }
      return getMyNfts();
    }
    fetchData();
  }, []);


  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
      )
      }
    </div>
  )
}

export default App;
