import React, {useEffect} from "react";
import Chart from "./Chart";

const SingleChart = ( {selectedCoin} ) => {
    console.log(selectedCoin)
    let sparklineData = selectedCoin.sparkline_in_7d && selectedCoin.sparkline_in_7d.price
    console.log(sparklineData)
    return (
        <div className="chart">
            <div className="chart__container" key={selectedCoin.name}>
            <h2 className="coin__title">{selectedCoin.name}</h2>
            <h4 className="coin__symbol">{selectedCoin.symbol}</h4>
            <div className="coin__logo">
                <img src={selectedCoin.image} height="40" alt={selectedCoin.name} />
            </div>
            <h4> Current Price: {selectedCoin.current_price} (usd)</h4>
            {/* <Chart sparklineData={sparklineData} /> */}
            </div>
        </div>
  );
};
export default SingleChart;
