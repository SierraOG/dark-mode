import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import SingleChart from "./components/SingleChart"
import Navbar from "./components/Navbar";
import CoinPicker from './components/CoinPicker';

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [coinList, setCoinList] = useState([]);
  const [coinId, setCoinId] = useState('bitcoin');
  const [selectedCoin, setSelectedCoin] = useState({})
  let coinOptions = []
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {setCoinData(res.data); setSelectedCoin(res.data[0])})
      .catch(err => console.log(err));
      axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true"
      )
      .then(res => setCoinList(res.data))
      .catch(err => console.log(err));
  }, []);

  // updates coinid
  useEffect(()=>{
    setCoinId(coinId)

    setSelectedCoin(coinList.filter(obj => {
      return obj['id'] === coinId
    })[0])
  }, [coinId])

  useEffect(()=>{
    setSelectedCoin(selectedCoin)
    console.log(selectedCoin)
    console.log(selectedCoin.sparkline_in_7d && selectedCoin.sparkline_in_7d.price)
  }, [selectedCoin])

  // makes array of object that will be used by semantic ui dropdown
  coinList.forEach((coin) => coinOptions.push({
    key: coin['id'],
    text: coin['id'],
    value: coin['id'],
  }))

  return (
    <div className="App">
      <Navbar />
      <CoinPicker coinOptions = {coinOptions} coinId = {coinId} setCoinId={setCoinId}/>
      <SingleChart selectedCoin={selectedCoin} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

